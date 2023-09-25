import { HttpService as NestHttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosRequestException } from '@libs/exceptions/exception.axios';
import { Observable, lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
  constructor(private readonly httpService: NestHttpService) {}

  async get<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
    return this.request<T, unknown>('GET', endpoint, params);
  }

  async post<T, D>(
    endpoint: string,
    data?: D,
    params?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T, unknown>('POST', endpoint, params, data);
  }

  async put<T, D>(
    endpoint: string,
    data?: D,
    params?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T, unknown>('PUT', endpoint, params, data);
  }

  async delete<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
    return this.request<T, unknown>('DELETE', endpoint, params);
  }

  private async request<T, D>(
    method: string,
    endpoint: string,
    params?: AxiosRequestConfig,
    data?: D,
  ): Promise<T> {
    try {
      const observable: Observable<AxiosResponse<T>> =
        this.httpService.request<T>({
          method,
          url: endpoint,
          ...params,
          data,
        });

      const response: AxiosResponse<T> = await lastValueFrom(observable); // Convertir a promesa

      return response.data;
    } catch (error) {
      console.log(error);
      throw new AxiosRequestException('Error en la solicitud Axios');
    }
  }
}
