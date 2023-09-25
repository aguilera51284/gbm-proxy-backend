import { Injectable } from '@nestjs/common';
import { MarketstackServices } from '@modules/stockTickers/services/marketstack/marketstack.services';
import { PaginatedQueryRequestDto } from '@src/libs/api/paginated-query.request.dto';

@Injectable()
export class TickerRepository {
  constructor(private readonly httpService: MarketstackServices) {}

  async getTickersList(queryParams: PaginatedQueryRequestDto): Promise<any> {
    return this.httpService.getTickersList(queryParams);
  }

  async getTickerDetail(symbol: string): Promise<any> {
    return this.httpService.getTickerDetail(symbol);
  }
}
