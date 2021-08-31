//* packages
import { useEffect, useState, useRef, ChangeEvent, RefObject } from "react";

//*interfaces
import {
  CallbackWithArg,
  Callback,
  CallbackWithReturnArg,
  CallbackWithReturn,
} from "@interfaces/Utilities";

//* helpers
import { TestGroup } from "@helper/Test";
import Validator, { ValidatorResults } from "@helper/Validator";

type FieldTypes = HTMLInputElement | HTMLTextAreaElement | HTMLParamElement;

const validatorFactory = (type: string, groups: TestGroup[]) => {
  const validator = groups.reduce((factory, group) => {
    factory[group.type] = new Validator(group.getTests());
    return factory;
  }, {});
  return validator[type];
};

interface AllResults {
  [key: string]: ValidatorResults;
}

interface ValidationHandlerConstructor {
  onValid: CallbackWithArg<Event>;
  onInvalid: CallbackWithArg<Event>;
  onChange?: CallbackWithArg<Event>;
}

class ValidationHandler {
  private validators: Map<string, Validator> = new Map<string, Validator>();
  private allPassed: boolean = false;

  constructor(options: ValidationHandlerConstructor) {
    if (options.onChange) addEventListener("changed", options.onChange);
    addEventListener("valid", options.onValid);
    addEventListener("invalid", options.onInvalid);
  }

  public addValidator(name: string, validator: Validator): Callback {
    this.validators.set(name, validator);
    return () => this.removeValidator(name);
  }

  public removeValidator(name: string): Validator | null {
    if (this.validators.has(name)) {
      const validator = this.validators.get(name) as Validator;
      this.validators.delete(name);
      return validator;
    }
    return null;
  }

  public getAllResults(
    callback?: (name: string, results: ValidatorResults) => void
  ): Map<string, AllResults> {
    const allResults = new Map();
    this.validators.forEach((validator, name) => {
      const results = validator.getResults();
      if (callback) callback(name, results);
      allResults.set(name, results);
    });
    return allResults;
  }

  public validate(name: string, value: string) {
    if (this.validators.has(name)) {
      const results = this.validators.get(name)?.run(value);
      dispatchEvent(new CustomEvent("changed", { detail: { name, results } }));
      if (!results?.passed) {
        dispatchEvent(
          new CustomEvent("invalid", { detail: { name, results } })
        );
        this.allPassed = false;
      } else this.checkOthersAreValid(name, results);
    }
  }

  public initValidation(arr: FieldTypes[]) {
    arr.forEach((elem) => {
      if (this.validators.has(elem.name)) {
        const validator = this.validators.get(elem.name) as Validator;
        validator.run(elem.value);
      }
    });
  }

  private checkOthersAreValid(name: string, results: ValidatorResults): void {
    for (let key of Array.from(this.validators.keys())) {
      if (key !== name) {
        const validator = this.validators.get(key) as Validator;
        if (validator.validated && !validator.getResults().passed) {
          return;
        }
      }
    }
    if (!this.allPassed) {
      this.allPassed = true;
      dispatchEvent(new CustomEvent("valid", { detail: { name, results } }));
    }
  }

  public toString(name?: string): string {
    if (!name) {
      let str = "";
      this.validators.forEach((validator, name) => {
        str += validator.toString(name);
      });
      return str;
    }
    const validator = this.validators.get(name);
    return validator ? validator.toString(name) : "";
  }

  public getNames(invalid: boolean = false): string[] {
    const names: string[] = [];
    this.getAllResults((name, results) => {
      if ((!results.passed && invalid) || (results.passed && !invalid)) {
        names.push(name);
      }
    });
    return names;
  }
}

export interface UseValidationEventObj {
  name: string;
  results: ValidatorResults;
}

interface UseValidationArgs {
  testGroups: TestGroup[];
  onChange?: CallbackWithArg<CustomEvent<UseValidationEventObj>>;
  onValid?: CallbackWithArg<CustomEvent<UseValidationEventObj>>;
  onInvalid?: CallbackWithArg<CustomEvent<UseValidationEventObj>>;
  ref?: RefObject<HTMLFormElement>;
}

interface UseValidationReturn {
  validate: CallbackWithArg<ChangeEvent<FieldTypes>>;
  valid: boolean;
  getInvalidMessage: CallbackWithReturnArg<string, string>;
  getAllInvalidMessage: CallbackWithReturn<string>;
  getInvalidFieldNames: CallbackWithReturn<string[]>;
}

const useValidation = (options: UseValidationArgs): UseValidationReturn => {
  if (!options.ref) options.ref = useRef<HTMLFormElement>(null);
  const [allValid, setAllValid] = useState(false);
  const validationHandler = useRef<ValidationHandler | null>(null);

  useEffect(() => {
    validationHandler.current = new ValidationHandler({
      onValid,
      onInvalid,
      onChange,
    });
    if (document && options.ref && options.ref.current) {
      const inputs = Array.from(options.ref.current) as FieldTypes[];
      inputs.forEach((input) => {
        const castedInput = input as FieldTypes,
          name = castedInput.getAttribute("name"),
          type = castedInput.getAttribute("type");
        if (input.nodeName !== "BUTTON" && name && type) {
          validationHandler.current?.addValidator(
            name,
            validatorFactory(type, options.testGroups)
          );
        }
      });
      validationHandler.current.initValidation(inputs);
    }
  }, []);

  function onChange(event) {
    if (options.onChange) options.onChange(event);
  }

  function onValid(event) {
    if (!allValid) setAllValid(true);
    if (options.onValid) options.onValid(event);
  }

  function onInvalid(event) {
    setAllValid(false);
    if (options.onInvalid) options.onInvalid(event);
  }

  function getInvalidMessage(name: string): string {
    if (validationHandler.current) {
      return validationHandler.current.toString(name);
    }
    return "";
  }

  function getAllInvalidMessage(): string {
    if (validationHandler.current) {
      return validationHandler.current.toString();
    }
    return "";
  }

  function getInvalidFieldNames(): string[] {
    if (validationHandler.current) {
      return validationHandler.current.getNames(true);
    }
    return [];
  }

  return {
    validate: (event) =>
      validationHandler.current?.validate(
        event.target.name,
        event.target.value
      ),
    valid: allValid,
    getInvalidMessage,
    getAllInvalidMessage,
    getInvalidFieldNames,
  };
};

export default useValidation;
