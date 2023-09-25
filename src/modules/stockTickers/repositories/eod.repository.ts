import { Injectable } from '@nestjs/common';
import { MarketstackServices } from '@modules/stockTickers/services/marketstack/marketstack.services';
import { PaginatedQueryRequestDto } from '@src/libs/api/paginated-query.request.dto';
import { TickerEodRequestDto } from '@modules/stockTickers/dto/tickerEod.request.dto';

@Injectable()
export class EODRepository {
  constructor(private readonly httpService: MarketstackServices) {}

  async getEndofDayData(
    queryParams: PaginatedQueryRequestDto,
    symbols: string[],
  ): Promise<any> {
    return this.httpService.getEndofDayData(queryParams, symbols);
  }

  async getSingleEndofDayData(symbol: string, date: string): Promise<any> {
    return this.httpService.getTickerEODDetail(symbol, date);
  }

  async getTickerEODBetweenDates(query: TickerEodRequestDto): Promise<any> {
    return this.httpService.getSingleTickerEOD(
      query.symbol,
      query.startDate,
      query.endDate,
    );
  }
}
