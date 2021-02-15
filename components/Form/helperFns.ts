import { PostData } from "./FormInterface";
import FInputs from "../static/formInputs";

interface FormInfo {
  [key: string]: {
    name: string;
    error: string;
    isValid: boolean;
  };
}

interface GetFieldInfo {
  event: any;
  uids: string[];
  formInfo: FormInfo;
}

export function getFieldInfo({
  event,
  uids,
  formInfo,
}: GetFieldInfo): PostData[] {
  const fieldInfo: PostData[] = [];
  for (let field of event.target) {
    if (field.type !== "submit") {
      const { name, value } = field;
      let newName: string;
      if (uids.includes(name)) {
        newName = formInfo[name].name;
        field.value = "";
      } else newName = "honeypot";

      fieldInfo.push({ name: newName, value });
    }
  }
  return fieldInfo;
}

export function defFormInfo(uids: string[]): FormInfo {
  return FInputs.reduce((state, { name }, index) => {
    state[`${uids[index]}`] = {
      name,
      error: "",
      isValid: false,
    };
    return state;
  }, {});
}
