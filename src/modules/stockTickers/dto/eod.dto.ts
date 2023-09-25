import { IsDate, IsNumber } from 'class-validator';

export class EODDto {
  @IsNumber()
  openPrice: number;

  @IsNumber()
  closePrice: number;

  @IsNumber()
  highPrice: number;

  @IsNumber()
  lowPrice: number;

  @IsNumber()
  volume: number;

  @IsDate()
  date: Date;
}
