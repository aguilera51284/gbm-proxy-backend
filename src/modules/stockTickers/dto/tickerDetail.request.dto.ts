import { IsString, IsOptional } from 'class-validator';

export class TickerDetailRequestDto {
  @IsString()
  @IsOptional()
  date = 'latest';
}
