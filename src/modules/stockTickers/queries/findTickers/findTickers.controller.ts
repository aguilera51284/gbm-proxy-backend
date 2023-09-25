import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Result } from 'oxide.ts';
import { Paginated } from '@src/libs/ddd';
import { TickerPaginatedResponseDto } from '@src/modules/stockTickers/dto/tickers.paginated.response.dto';
import { PaginatedQueryRequestDto } from '@src/libs/api/paginated-query.request.dto';
import { TickerService } from '@modules/stockTickers/queries/findTickers/findTickers.services';
import { TickerDto } from '@modules/stockTickers/dto/ticker.dto';

@Controller(routesV1.version)
export class FindTikcersHttpController {
  constructor(private readonly tickerService: TickerService) {}

  @Get(routesV1.tickers.root)
  @ApiOperation({ summary: 'Find tickers list' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TickerPaginatedResponseDto,
  })
  async execute(
    @Query() queryParams: PaginatedQueryRequestDto,
  ): Promise<TickerPaginatedResponseDto> {
    const result: Result<
      Paginated<TickerDto>,
      Error
    > = await this.tickerService.findTickers(queryParams);
    const paginated = result.unwrap();
    return new TickerPaginatedResponseDto({
      ...paginated,
    });
  }
}
