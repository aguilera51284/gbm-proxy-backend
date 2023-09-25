import { Injectable } from '@nestjs/common';
import { TickerDetailDomainService } from '@modules/stockTickers/domain/tickerDetial.domain.service';

@Injectable()
export class TickerDetailService {
  constructor(
    private readonly tickerDetailDomainService: TickerDetailDomainService,
  ) {}

  async findTickers(symbol: string, date: string): Promise<any> {
    return this.tickerDetailDomainService.getTickerEODDetails(symbol, date);
  }
}
