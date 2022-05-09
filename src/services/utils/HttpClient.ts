import axios, { Axios } from 'axios';

class HttpClient {
  axiosInstance: Axios;

  private _handleError(error: any) {
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Servidor fora do ar!');
    }

    if (!error.response.data) {
      throw new Error('Problema de conexão com o servidor!');
    }

    if (error.response.status === 500) {
      throw new Error('Problema interno no servidor!');
    }

    throw error.response.data;
  }

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  async post(path: string, data: unknown): Promise<any> {
    const response = await this.axiosInstance
      .post(path, data)
      .catch((error) => this._handleError(error));

    return response;
  }
}

export default HttpClient;
