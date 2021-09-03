import { TestGroup } from "@helper/Test";
import Validator from "@helper/Validator";
import { ValidEmailResponse } from "./emailInterfaces";
import { CallbackWithReturnArg } from "@interfaces/Utilities";

interface ValidateFormDataArgs {
  data: { [key: string]: string };
  needsNames: string[];
}

const vFactory = (name: string): Validator => {
  switch (name) {
    case "name":
      return new Validator(TestGroup.TextTestGroup().getTests());
    case "email":
      return new Validator(TestGroup.EmailTestGroup().getTests());
    case "message":
      return new Validator(TestGroup.MessageTestGroup().getTests());
    default:
      return new Validator(new TestGroup("").getTests());
  }
};

const createResponseObj = (message: string, valid: boolean) => ({
  message,
  valid,
});

export default function validateFormData(
  args: ValidateFormDataArgs,
  factory: CallbackWithReturnArg<string, Validator> = vFactory
): ValidEmailResponse {
  const data = Object.keys(args.data);
  if (data.length < args.needsNames.length)
    return createResponseObj("An input is either missing or empty", false);

  for (const key of args.needsNames) {
    if (!(key in args.data))
      return createResponseObj("Invalid name for form input", false);
    const validator = factory(key);
    if (!validator.run(args.data[key]))
      return createResponseObj(validator.toString(key), false);
  }

  return createResponseObj("", true);
}
