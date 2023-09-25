import { Injectable } from '@nestjs/common';
import { MarketstackEODResponseDTO } from '@modules/stockTickers/dto/marketstack-eod.response.dto';
import { EODDto } from '@modules/stockTickers/dto/eod.dto';

@Injectable()
export class EODMapper {
  mapToDto(eodData: MarketstackEODResponseDTO): EODDto {
    return {
      openPrice: eodData.open,
      closePrice: eodData.close,
      volume: eodData.volume,
      highPrice: eodData.high,
      lowPrice: eodData.low,
      date: eodData.date,
    };
  }
  mapArrayToDto(eodDataArray: MarketstackEODResponseDTO[]): EODDto[] {
    return eodDataArray.map((eodData) => this.mapToDto(eodData));
  }
}
