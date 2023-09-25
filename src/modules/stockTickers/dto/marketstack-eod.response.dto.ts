import { IsNumber, IsString, IsDate } from 'class-validator';

export class MarketstackEODResponseDTO {
  @IsNumber()
  open: number;

  @IsNumber()
  high: number;

  @IsNumber()
  low: number;

  @IsNumber()
  close: number;

  @IsNumber()
  volume: number;

  @IsNumber()
  adj_high: number;

  @IsNumber()
  adj_low: number;

  @IsNumber()
  adj_close: number;

  @IsNumber()
  adj_open: number;

  @IsNumber()
  adj_volume: number;

  @IsNumber()
  split_factor: number;

  @IsNumber()
  dividend: number;

  @IsString()
  symbol: string;

  @IsString()
  exchange: string;

  @IsDate()
  date: Date;
}
