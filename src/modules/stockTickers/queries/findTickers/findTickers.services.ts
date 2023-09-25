import { Injectable } from '@nestjs/common';
import { TickerDomainService } from '@modules/stockTickers/domain/ticker.domain.service';
import { PaginatedQueryRequestDto } from '@src/libs/api/paginated-query.request.dto';

@Injectable()
export class TickerService {
  constructor(private readonly tickerDomainService: TickerDomainService) {}

  async findTickers(queryParams: PaginatedQueryRequestDto): Promise<any> {
    return this.tickerDomainService.findAndMergeTickers(queryParams);
  }
}
