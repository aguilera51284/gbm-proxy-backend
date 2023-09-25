import {
  Controller,
  Get,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Result } from 'oxide.ts';
import { FindEODTikcersService } from '@modules/stockTickers/queries/findEODTickers/findEODTickers.service';
import { TickerEodRequestDto } from '@modules/stockTickers/dto/tickerEod.request.dto';
import { EODDto } from '@modules/stockTickers/dto/eod.dto';

@Controller(routesV1.version)
export class FindEODTikcersHttpController {
  constructor(private readonly findEODTikcersService: FindEODTikcersService) {}

  @Get(routesV1.tickers.eod)
  @ApiOperation({ summary: 'Find tickers eod with range' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: EODDto,
    isArray: true,
  })
  async execute(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: TickerEodRequestDto,
  ): Promise<EODDto[]> {
    const result: Result<EODDto[], Error> =
      await this.findEODTikcersService.findTickers(query);
    return result.unwrap();
  }
}
