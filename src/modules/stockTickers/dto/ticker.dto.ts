import { IsString, IsNumber, IsOptional } from 'class-validator';

export class TickerDto {
  @IsString()
  symbol: string;

  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  latestClosePrice?: number;

  @IsString()
  exchangeAcronym: string;

  @IsString()
  exchangeCountry: string;
}
