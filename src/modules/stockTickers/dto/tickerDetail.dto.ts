import { IsString, IsObject } from 'class-validator';
import { EODDto } from '@modules/stockTickers/dto/eod.dto';

export class TickerDetailDto {
  @IsString()
  symbol: string;

  @IsString()
  name: string;

  @IsString()
  exchangeName: string;

  @IsString()
  exchangeAcronym: string;

  @IsString()
  exchangeCountry: string;

  @IsObject()
  readonly eodInformation: EODDto;
}
