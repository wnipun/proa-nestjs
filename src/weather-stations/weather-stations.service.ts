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
    return this.weatherStationsRepository
      .createQueryBuilder('ws')
      .leftJoinAndSelect(
        'ws.data',
        'data',
        `data.id = (
        SELECT d2.id FROM data d2
        WHERE d2.weather_station_id = ws.id
        ORDER BY d2.timestamp DESC
        LIMIT 1
      )`,
      )
      .getMany();
  }

  findUsingState(state: string): Promise<WeatherStation[]> {
    return this.weatherStationsRepository
      .createQueryBuilder('ws')
      .leftJoinAndSelect(
        'ws.data',
        'data',
        `data.id = (
        SELECT d2.id FROM data d2
        WHERE d2.weather_station_id = ws.id
        ORDER BY d2.timestamp DESC
        LIMIT 1
      )`,
      )
      .where('ws.state = :state', { state })
      .getMany();
  }
}
