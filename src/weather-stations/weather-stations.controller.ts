import { Controller, Get } from '@nestjs/common';
import { WeatherStationsService } from './weather-stations.service';
import { WeatherStation } from './weather-station.entity';

@Controller('weather-stations')
export class WeatherStationsController {
  constructor(private weatherStationsService: WeatherStationsService) {}

  @Get()
  findAll(): Promise<WeatherStation[]> {
    return this.weatherStationsService.findAll();
  }
}
