import Test from "./Test";
import { firstToUpper } from "./utilities";

export interface ValidatorResults {
  /**
   * A boolean representing whether all tests passed.
   */
  passed: boolean;
  /**
   * An object representing the name's all of the tests and if they passed.
   */
  tests: {
    [key: string]: boolean;
  };
}
/**
 * Used to run a set of unique tests
 */
class Validator {
  public validated: boolean = false;
  private results: ValidatorResults = { passed: false, tests: {} };
  /**
   *
   * @param tests A set which contains unique tests
   */
  constructor(private tests: Set<Test>) {}
  /**
   *
   * @param value - The string that needs to be validated
   * @returns an object that contains the two properties, the passed {@link ValidateReturn}
   */
  public run(value: string): ValidatorResults {
    this.validated = true;

    let tempPassed = true;
    this.tests.forEach((test: Test) => {
      const result = test.execute(value);
      if (!result) tempPassed = false;
      this.results.tests[test.name] = result;
    });
    this.results.passed = tempPassed;
    return this.results;
  }

  getResults() {
    return this.results;
  }

  getTests() {
    return this.tests;
  }
  toString(name: string): string {
    let str = "",
      i = 1;
    this.tests.forEach((test) => {
      if (!this.results.tests[test.name]) {
        str += `${i}. ${firstToUpper(name)} field ${test.message}\n`;
        i++;
      }
    });
    return str;
  }
}

export default Validator;
