export interface ErrorResponse {
  data: null;
  error: string; // TODO: add errors enum/typing
}
export interface SuccessResponse<T> {
  data: T;
  error: null;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface RawPerson {
  id: number;
  first_name: string;
  last_name: string;
}

export interface Person {
  id: RawPerson["id"];
  firstName: RawPerson["first_name"];
  lastName: RawPerson["last_name"];
}
