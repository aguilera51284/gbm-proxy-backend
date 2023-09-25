import { IsString, Matches } from 'class-validator';

export class TickerEodRequestDto {
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  startDate: string;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  endDate: string;

  @IsString()
  @Matches(/^[^,]+$/)
  symbol: string;
}
