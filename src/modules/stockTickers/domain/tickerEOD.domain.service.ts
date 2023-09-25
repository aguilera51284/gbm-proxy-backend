import { Injectable } from '@nestjs/common';
import { EODRepository } from '@modules/stockTickers/repositories/eod.repository';
import { EODMapper } from '@modules/stockTickers/mappers/eod.mappers';
import { EODDto } from '@modules/stockTickers/dto/eod.dto';
import { TickerEodRequestDto } from '@modules/stockTickers/dto/tickerEod.request.dto';
import { Ok } from 'oxide.ts';

@Injectable()
export class TickerEODDomainService {
  constructor(
    private readonly eodRepository: EODRepository,
    private readonly eODMapper: EODMapper,
  ) {}

  async getTickerEODDetails(query: TickerEodRequestDto): Promise<Ok<EODDto[]>> {
    const eodResponse = await this.eodRepository.getTickerEODBetweenDates(
      query,
    );
    return Ok(this.eODMapper.mapArrayToDto(eodResponse.data));
  }
}
