import { Injectable } from '@nestjs/common';
import { TickerEODDomainService } from '@modules/stockTickers/domain/tickerEOD.domain.service';
import { TickerEodRequestDto } from '@modules/stockTickers/dto/tickerEod.request.dto';

@Injectable()
export class FindEODTikcersService {
  constructor(
    private readonly tickerEODDomainService: TickerEODDomainService,
  ) {}

  async findTickers(query: TickerEodRequestDto): Promise<any> {
    return this.tickerEODDomainService.getTickerEODDetails(query);
  }
}
