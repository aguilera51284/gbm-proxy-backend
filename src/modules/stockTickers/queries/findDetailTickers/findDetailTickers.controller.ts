import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Result } from 'oxide.ts';
import { TickerDetailService } from '@modules/stockTickers/queries/findDetailTickers/findDetailTickers.service';
import { TickerDetailDto } from '@modules/stockTickers/dto/tickerDetail.dto';
import { TickerDetailRequestDto } from '@modules/stockTickers/dto/tickerDetail.request.dto';

@Controller(routesV1.version)
export class FindTikcersDetailsHttpController {
  constructor(private readonly tickerDetailService: TickerDetailService) {}

  @Get(routesV1.tickers.detail)
  @ApiOperation({ summary: 'Find tickers details' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TickerDetailDto,
  })
  async execute(
    @Param('symbol') symbol: string,
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: TickerDetailRequestDto,
  ): Promise<TickerDetailDto> {
    const result: Result<TickerDetailDto, Error> =
      await this.tickerDetailService.findTickers(symbol, query.date);
    return result.unwrap();
  }
}
