import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from '@src/libs/api/paginated.response.base';
import { TickerDto } from '@modules/stockTickers/dto/ticker.dto';

export class TickerPaginatedResponseDto extends PaginatedResponseDto<TickerDto> {
  @ApiProperty({ type: TickerDto, isArray: true })
  readonly data: readonly TickerDto[];
}
