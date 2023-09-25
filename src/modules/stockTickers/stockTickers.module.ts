import { Logger, Module } from '@nestjs/common';
import { FindTikcersHttpController } from '@modules/stockTickers/queries/findTickers/findTickers.controller';
import { TickerDomainService } from '@modules/stockTickers/domain/ticker.domain.service';
import { TickerService } from '@modules/stockTickers/queries/findTickers/findTickers.services';
import { MarketstackServices } from './services/marketstack/marketstack.services';
import { HttpService } from '@libs/http/http.service';
import { HttpModule } from '@nestjs/axios';
import { EODRepository } from '@modules/stockTickers/repositories/eod.repository';
import { TickerRepository } from '@modules/stockTickers/repositories/ticker.repository';
import { TickerMapper } from '@modules/stockTickers/mappers/tickers.mappers';
import { FindTikcersDetailsHttpController } from '@modules/stockTickers/queries/findDetailTickers/findDetailTickers.controller';
import { TickerDetailMapper } from '@modules/stockTickers/mappers/tickersDetail.mappers';
import { TickerDetailService } from '@modules/stockTickers/queries/findDetailTickers/findDetailTickers.service';
import { TickerDetailDomainService } from '@modules/stockTickers//domain/tickerDetial.domain.service';
import { FindEODTikcersHttpController } from '@modules/stockTickers/queries/findEODTickers/findEODTickers.controller';
import { FindEODTikcersService } from '@modules/stockTickers/queries/findEODTickers/findEODTickers.service';
import { TickerEODDomainService } from '@modules/stockTickers/domain/tickerEOD.domain.service';
import { EODMapper } from '@modules/stockTickers/mappers/eod.mappers';

const httpControllers = [
  FindTikcersHttpController,
  FindTikcersDetailsHttpController,
  FindEODTikcersHttpController,
];

@Module({
  imports: [HttpModule],
  controllers: [...httpControllers],
  providers: [
    Logger,
    HttpService,
    MarketstackServices,
    TickerService,
    TickerDomainService,
    TickerRepository,
    EODRepository,
    TickerMapper,
    TickerDetailMapper,
    TickerDetailService,
    TickerDetailDomainService,
    FindEODTikcersService,
    TickerEODDomainService,
    EODMapper,
  ],
})
export class StockTickersModule {}
