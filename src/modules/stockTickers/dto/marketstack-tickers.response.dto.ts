import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject } from 'class-validator';

class StockExchangeDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly acronym: string;

  @ApiProperty()
  @IsString()
  readonly mic: string;

  @ApiProperty()
  @IsString()
  readonly country: string;

  @ApiProperty()
  @IsString()
  readonly country_code: string;

  @ApiProperty()
  @IsString()
  readonly city: string;

  @ApiProperty()
  @IsString()
  readonly website: string;

  @ApiProperty()
  @IsObject()
  readonly timezone: {
    timezone: string;
    abbr: string;
    abbr_dst: string;
  };
}

export class MarketstackTickersResponseDTO {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly symbol: string;

  @ApiProperty({ type: StockExchangeDto })
  @IsObject()
  readonly stock_exchange: StockExchangeDto;
}
