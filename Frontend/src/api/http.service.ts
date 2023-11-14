import axios from "axios";
import { LoginCredentials } from "./models";
import { Endpoint } from "./endpoints";

export class HttpService {
  private baseUrl = "http://localhost:5062/api";
  private api;
  constructor() {
    this.api = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
    });
  }

  public async login (credentials: LoginCredentials) {
    try {
      return await this.api.post(Endpoint.Login, credentials);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("token - ошибка на стороне сервера");
    }
  }
}
