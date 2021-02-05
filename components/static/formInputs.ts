import { FInput } from "../interfaces/Form";

const Inputs: FInput[] = [
  {
    name: "name",
    label: "Name",
    colSpan: "1",
    inputHeight: "14",
    inputInfo: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    colSpan: "1",
    inputHeight: "14",
    inputInfo: "input",
    type: "email",
  },
  {
    name: "message",
    label: "Message",
    colSpan: "full",
    inputHeight: "40",
    inputInfo: "textarea",
    type: "",
  },
];

export default Inputs;
