import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherStationsService } from './weather-stations.service';
import { WeatherStationsController } from './weather-stations.controller';
import { WeatherStation } from './weather-station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeatherStation])],
  providers: [WeatherStationsService],
  controllers: [WeatherStationsController],
})
export class WeatherStationsModule {}
