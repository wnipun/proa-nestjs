import { Body, Controller, Get, Post } from '@nestjs/common';
import { WeatherStationsService } from './weather-stations.service';
import { WeatherStation } from './weather-station.entity';

@Controller('weather-stations')
export class WeatherStationsController {
  constructor(private weatherStationsService: WeatherStationsService) {}

  @Get()
  findAll(): Promise<WeatherStation[]> {
    return this.weatherStationsService.findAll();
  }

  @Post('by-state')
  findUsingState(@Body('state') state: string): Promise<WeatherStation[]> {
    if (state === '') {
      return this.weatherStationsService.findAll();
    }

    return this.weatherStationsService.findUsingState(state);
  }
}
