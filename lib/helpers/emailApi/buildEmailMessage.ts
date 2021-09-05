import { DateTime } from "luxon";

interface BuildEmailMessage {
  email: string;
  message: string;
}

export default function buildEmailMessage({
  email,
  message,
}: BuildEmailMessage): string {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  return `Message sent ${time}:\n\n${message}\n\nReply back at ${email}.`;
}
