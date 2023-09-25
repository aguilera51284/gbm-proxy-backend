import { Injectable } from '@nestjs/common';
import { TickerDto } from '@modules/stockTickers/dto/ticker.dto';
import { MarketstackTickersResponseDTO } from '@modules/stockTickers/dto/marketstack-tickers.response.dto';
import { MarketstackEODResponseDTO } from '@modules/stockTickers/dto/marketstack-eod.response.dto';

@Injectable()
export class TickerMapper {
  mapToDto(
    tickerData: MarketstackTickersResponseDTO,
    eodData: MarketstackEODResponseDTO,
  ): TickerDto {
    return {
      symbol: tickerData.symbol,
      name: tickerData.name,
      latestClosePrice: eodData.close,
      exchangeAcronym: tickerData.stock_exchange.acronym,
      exchangeCountry: tickerData.stock_exchange.country,
    };
  }
}
