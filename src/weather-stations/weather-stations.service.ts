import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherStation } from './weather-station.entity';

@Injectable()
export class WeatherStationsService {
  constructor(
    @InjectRepository(WeatherStation)
    private weatherStationsRepository: Repository<WeatherStation>,
  ) {}

  findAll(): Promise<WeatherStation[]> {
    return this.weatherStationsRepository.find({
      relations: {
        data: true,
      },
    });
  }
}
