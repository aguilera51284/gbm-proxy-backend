import { Injectable } from '@nestjs/common';
import { TickerDetailDto } from '@modules/stockTickers/dto/tickerDetail.dto';
import { MarketstackTickersResponseDTO } from '@modules/stockTickers/dto/marketstack-tickers.response.dto';
import { MarketstackEODResponseDTO } from '@modules/stockTickers/dto/marketstack-eod.response.dto';

@Injectable()
export class TickerDetailMapper {
  mapToDto(
    tickerData: MarketstackTickersResponseDTO,
    eodData: MarketstackEODResponseDTO,
  ): TickerDetailDto {
    return {
      symbol: tickerData.symbol,
      name: tickerData.name,
      exchangeName: tickerData.stock_exchange.name,
      exchangeAcronym: tickerData.stock_exchange.acronym,
      exchangeCountry: tickerData.stock_exchange.country,
      eodInformation: {
        openPrice: eodData.open,
        closePrice: eodData.close,
        volume: eodData.volume,
        highPrice: eodData.high,
        lowPrice: eodData.low,
        date: eodData.date,
      },
    };
  }
}
