import { HttpService } from '@libs/http/http.service';
import { Injectable } from '@nestjs/common';
import { PaginatedParams, PaginatedQueryBase } from '@libs/ddd/query.base';
import { marketstackConfig } from '@config/marketstack.config';

export class TickersQuery extends PaginatedQueryBase {
  constructor(props: PaginatedParams<TickersQuery>) {
    super(props);
  }
}

@Injectable()
export class MarketstackServices extends HttpService {
  private readonly baseURL = marketstackConfig.MARKETSTACK_API_URL;
  private readonly accessKey = marketstackConfig.MARKETSTACK_PUBLIC_ACCESS_KEY;

  private addAccessKeyToParams(
    params?: Record<string, any>,
  ): Record<string, any> {
    return { ...params, access_key: this.accessKey };
  }

  async getTickersList<T extends PaginatedQueryBase>(
    query: PaginatedParams<T>,
  ): Promise<any> {
    const pagination = new TickersQuery(query);
    console.log(pagination);
    const response = await this.get(`${this.baseURL}/tickers`, {
      params: {
        ...this.addAccessKeyToParams(query),
        limit: pagination.limit,
        offset: pagination.offset,
      },
    });
    return response;
  }

  async getEndofDayData<T extends PaginatedQueryBase>(
    query: PaginatedParams<T>,
    symbols: string[],
  ): Promise<any> {
    const combinedSymbols = symbols.join(',');
    const response = await this.get(`${this.baseURL}/eod/latest`, {
      params: { ...this.addAccessKeyToParams(query), symbols: combinedSymbols },
    });
    return response;
  }

  async getTickerDetail(symbol: string): Promise<any> {
    const response = await this.get(`${this.baseURL}/tickers/${symbol}`, {
      params: { ...this.addAccessKeyToParams() },
    });
    return response;
  }

  async getTickerEODDetail(symbol: string, date: string): Promise<any> {
    const response = await this.get(
      `${this.baseURL}/tickers/${symbol}/eod/${date}`,
      {
        params: { ...this.addAccessKeyToParams() },
      },
    );
    return response;
  }
  async getSingleTickerEOD(
    symbol: string,
    startDate: string,
    endDate: string,
  ): Promise<any> {
    const response = await this.get(`${this.baseURL}/eod`, {
      params: {
        ...this.addAccessKeyToParams(),
        date_from: startDate,
        date_to: endDate,
        symbols: symbol,
      },
    });
    return response;
  }
}
