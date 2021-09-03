import { DateTime } from "luxon";

export interface ResponseObject {
  remainingTimeInSeconds: number;
  remainingTimeInMinutes: number;
  remainingTotalRequests: number;
  formatedDuration: string;
  message: string;
  isoTime: string;
  status: number;
}

export interface IPRecordArgs {
  redis_client: any;
  ip: string;
  expiration: number;
  requestTime: DateTime;
}

export interface ValidEmailResponse {
  message: string;
  valid: boolean;
}
