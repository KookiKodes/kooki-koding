export interface FInput {
  type: string;
  label: string;
  inputInfo: "input" | "textarea";
  name: string;
  uid?: string;
  error?: string;
  placeholder: string;
  autocomplete: string;
  validation?(event: React.FormEvent): Promise<void>;
  onChange?(): Promise<void>;
}

export interface PostData {
  name: string;
  value: string;
}

export interface FBtn {
  isDisabled: boolean;
}
