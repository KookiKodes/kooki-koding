export interface FInput {
  type: string;
  label: string;
  inputInfo: "input" | "textarea";
  name: string;
  error?: string;
  validation?(event: React.FormEvent): void;
}

export interface FBtn {
  isDisabled: boolean;
}
