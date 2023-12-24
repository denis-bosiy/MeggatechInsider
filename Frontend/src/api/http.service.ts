import axios, { AxiosInstance } from "axios";
import { LoginCredentials } from "./models";
import { Endpoint } from "./endpoints";

export class HttpService {
  private baseUrl = "http://localhost:5062/api";
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: this.baseUrl,
      withCredentials: false
    });
  }

  public async login(credentials: LoginCredentials) {
    try {
      return await this.api.post(Endpoint.Login, credentials);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("token - ошибка на стороне сервера");
    }
  }

  public async deleteByArbitraryUrl(url: string, params: Map<string, string>) {
    try {
      let resultUrl: string = url;
      if (params.size !== 0) {
        resultUrl += "?";
      }
      params.forEach((value: string, key: string) => (resultUrl += key + "=" + value + "&"));
      return await this.api.delete(resultUrl);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("Ошибка на стороне сервера");
    }
  }

  public async getByArbitraryUrl(url: string, params?: Map<string, string>) {
    try {
      let resultUrl: string = url;
      if (params) {
        if (params.size !== 0) {
          resultUrl += "?";
        }
        params.forEach((value: string, key: string) => (resultUrl += key + "=" + value + "&"));
      }
      return await this.api.get(resultUrl);
    } catch (error: any) {
      if (error.response.status === 404) {
        throw Error("Не найдено");
      }
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("Ошибка на стороне сервера");
    }
  }

  public async postByArbitraryUrl(url: string, data: any) {
    try {
      return await this.api.post(url, data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("Ошибка на стороне сервера");
    }
  }

  public async putByArbitraryUrl(url: string, data: any) {
    try {
      return await this.api.put(url, data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw Error("refresh - ошибка");
      }
      throw Error("Ошибка на стороне сервера");
    }
  }
}
