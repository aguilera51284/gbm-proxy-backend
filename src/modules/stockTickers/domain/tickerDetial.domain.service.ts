import { Injectable } from '@nestjs/common';
import { TickerRepository } from '@modules/stockTickers/repositories/ticker.repository';
import { EODRepository } from '@modules/stockTickers/repositories/eod.repository';
import { TickerDetailMapper } from '@modules/stockTickers/mappers/tickersDetail.mappers';
import { TickerDetailDto } from '../dto/tickerDetail.dto';
import { Ok } from 'oxide.ts';

@Injectable()
export class TickerDetailDomainService {
  constructor(
    private readonly tickerRepository: TickerRepository,
    private readonly eodRepository: EODRepository,
    private readonly tickerDetailMapper: TickerDetailMapper,
  ) {}

  async getTickerEODDetails(
    symbol: string,
    date: string,
  ): Promise<Ok<TickerDetailDto>> {
    const tickerDetail = await this.tickerRepository.getTickerDetail(symbol);
    const eodDetail = await this.eodRepository.getSingleEndofDayData(
      symbol,
      date,
    );

    return Ok(this.tickerDetailMapper.mapToDto(tickerDetail, eodDetail));
  }
}
