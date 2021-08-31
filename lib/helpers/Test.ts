import { CallbackWithReturnArg, Callback } from "@interfaces/Utilities";
import * as InputTests from "./inputTests";

class Test {
  constructor(
    public name: string,
    public message: string,
    private test: CallbackWithReturnArg<any, boolean>
  ) {}

  public execute(value: any): boolean {
    return this.test(value);
  }
}

export class TestGroup {
  private tests: Map<string | number, Test> = new Map();

  static EmailTestGroup = (): TestGroup => {
    const testGroup = new TestGroup("email");
    const tests = {
      notEmpty: "is empty",
      validEmailName: "contains an invalid email name",
      validEmailNameLength: "email name contains too many characters",
      hasOneAtSign: "can only contain one at sign",
      validDomainName: "contains an invalid domain name",
      validDomainNameLength: "domain name contains too many characters",
      validTopLevelDomain: "contains an invalid top level domain",
    };

    Object.entries(tests).forEach(([fnName, message]) => {
      const test = new Test(fnName, message, InputTests[fnName]);
      testGroup.addTest(test);
    });
    return testGroup;
  };

  static MessageTestGroup = (): TestGroup => {
    const testGroup = new TestGroup("message");
    const tests = {
      notEmpty: "is empty",
      minMessageLength: "must contain a minimum of 100 characters",
      minWordCount: "must contain at least 20 words",
    };

    Object.entries(tests).forEach(([fnName, message]) => {
      const test = new Test(fnName, message, InputTests[fnName]);
      testGroup.addTest(test);
    });
    return testGroup;
  };

  static TextTestGroup = (): TestGroup => {
    const testGroup = new TestGroup("text");
    const test = new Test(
      InputTests.notEmpty.name,
      "is empty",
      InputTests.notEmpty
    );
    testGroup.addTest(test);
    return testGroup;
  };

  constructor(public type: string) {}

  public addTest(test: Test): Callback {
    this.tests.set(test.name, test);
    return () => this.remTest(test.name);
  }

  public remTest(name: string) {
    this.tests.delete(name);
  }

  public getTests(): Set<Test> {
    return new Set(Array.from(this.tests.values()));
  }
}

export default Test;
