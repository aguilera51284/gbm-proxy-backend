import { Injectable } from '@nestjs/common';
import { TickerRepository } from '@modules/stockTickers/repositories/ticker.repository';
import { PaginatedQueryRequestDto } from '@libs/api/paginated-query.request.dto';
import { EODRepository } from '@modules/stockTickers/repositories/eod.repository';
import { TickerMapper } from '@modules/stockTickers/mappers/tickers.mappers';
import { MarketstackEODResponseDTO } from '../dto/marketstack-eod.response.dto';
import { Paginated } from '@src/libs/ddd';
import { Ok } from 'oxide.ts';

@Injectable()
export class TickerDomainService {
  constructor(
    private readonly tickerRepository: TickerRepository,
    private readonly eodRepository: EODRepository,
    private readonly tickerMapper: TickerMapper,
  ) {}

  async findAndMergeTickers(
    queryParams: PaginatedQueryRequestDto,
  ): Promise<any> {
    const tickersList = await this.tickerRepository.getTickersList(queryParams);
    const symbols = tickersList.data.map((tickers) => tickers.symbol);
    const eodList = await this.eodRepository.getEndofDayData(
      queryParams,
      symbols,
    );

    const mergeTickerAndEODList = this.mergeTickersAndEOD(
      tickersList.data,
      eodList.data,
    );
    return Ok(
      new Paginated({
        data: mergeTickerAndEODList,
        count: tickersList.pagination.total,
        limit: queryParams.limit as number,
        page: queryParams.page as number,
      }),
    );
  }

  private mergeTickersAndEOD(tickers: any[], eodData: any[]): any[] {
    const mergedData = tickers.map((ticker) => {
      const matchingEOD: MarketstackEODResponseDTO = eodData.find(
        (eodItem) => eodItem.symbol === ticker.symbol,
      );
      if (matchingEOD) {
        const tickerDto = this.tickerMapper.mapToDto(ticker, matchingEOD);
        return tickerDto;
      } else {
        return {
          ...ticker,
          closePrice: null,
        };
      }
    });

    return mergedData;
  }
}
