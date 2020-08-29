import Axios from "axios";

import { ApiResponse, RawPerson } from "./types";

const baseUrl = "http://localhost:5000/api/v1";

export class Api {
  public static async get<T>(url: string) {
    const response = await Axios.get<ApiResponse<T>>(`${baseUrl}/${url}`);
    return response.data;
  }

  public static getPeople() {
    return this.get<RawPerson[]>("people");
  }
}
