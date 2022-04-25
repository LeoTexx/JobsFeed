import { FixedLengthArray } from "./utils";

export type ApiResponse = {
  job_title: string;
  organization_name: string;
  location_coordinates: FixedLengthArray<[string, string]>;
};

export interface Job extends ApiResponse {
  id: string;
}
