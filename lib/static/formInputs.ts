import { FInput } from "@interfaces/FormInterface";

const Inputs: FInput[] = [
  {
    name: "name",
    label: "Name",
    inputInfo: "input",
    type: "text",
    placeholder: "Please enter your name",
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Email",
    inputInfo: "input",
    type: "email",
    placeholder: "devin@example.com",
    autocomplete: "email",
  },
  {
    name: "message",
    label: "Message",
    inputInfo: "textarea",
    type: "textarea",
    placeholder: "Your message here...",
    autocomplete: "off",
  },
];

export default Inputs;
