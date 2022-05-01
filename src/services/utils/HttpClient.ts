import axios, { Axios } from 'axios';

class HttpClient {
  private axiosInstance: Axios;

  private _handleError(error: any) {
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Problema de conexão com o servidor!');
    }

    if (!error.response.data) {
      throw new Error('Servidor fora do ar');
    }

    throw error.response.data;
  }

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  async post(path: string, data: unknown) {
    try {
      await this.axiosInstance.post(path, data);
    } catch (error) {
      console.log('error', error);
      this._handleError(error);
    }
  }
}

export default HttpClient;
