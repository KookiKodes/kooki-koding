import { PostData } from "@interfaces/FormInterface";
import FInputs from "@static/formInputs";

interface FormValidObj {
  name: string;
  error: string;
  isValid: boolean;
}

interface FormInfo {
  [key: string]: FormValidObj;
}

interface GetFieldInfo {
  event: any;
  uids: string[];
  formInfo: FormInfo;
}

export async function getFieldInfo({
  event,
  uids,
  formInfo,
}: GetFieldInfo): Promise<PostData[]> {
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

export async function checkAllValid(formInfo: FormInfo): Promise<boolean> {
  const keys = Object.keys(formInfo);
  const totalFields = keys.length;
  const totalValid = keys.reduce((total, name) => {
    if (formInfo[name].isValid) total++;
    return total;
  }, 0);
  return totalFields === totalValid;
}

export async function formValidation(
  event: React.FormEvent
): Promise<FormValidObj> {
  const t = event.target as HTMLTextAreaElement | HTMLInputElement;
  const { value, name, type } = t;
  let isValid = false;
  let error = "";

  switch (true) {
    case type === "email":
      isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
      error = isValid ? "" : "Please provide a valid email address";
      break;
    case type === "text" || type === "textarea":
      isValid = value.length > 0;
      error = isValid ? "" : "Please fill the above input field";
      break;
    default:
      break;
  }
  return { name, error, isValid };
}
