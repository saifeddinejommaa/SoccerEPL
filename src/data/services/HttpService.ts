import axios from 'axios';
import {injectable} from 'inversify';

@injectable()
export class HttpService {
  private api = axios.create({baseURL: 'https://api.balldontlie.io/epl/v1'});

  async get<T>(url: string): Promise<T> {
    const response = await this.api.get<T>(url);
    return response.data;
  }
}
