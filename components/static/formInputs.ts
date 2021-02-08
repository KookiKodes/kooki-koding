import { FInput } from "../interfaces/Form";

const Inputs: FInput[] = [
  {
    name: "name",
    label: "Name",
    inputInfo: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    inputInfo: "input",
    type: "email",
  },
  {
    name: "message",
    label: "Message",
    inputInfo: "textarea",
    type: "textarea",
  },
];

export default Inputs;
