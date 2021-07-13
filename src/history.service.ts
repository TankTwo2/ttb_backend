import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entity/history.entity';

interface HistoryDto {
  method: string;
  url: string;
  ip: string;
}

@Injectable()
export class HistoryService {
  // constructor(
  //   @InjectRepository(History)
  //   private historyRepository: Repository<History>,
  // ) {}

  writeHistory(historyDto: HistoryDto) {
    console.log(historyDto);
    // this.historyRepository.save(historyDto);
  }
}
