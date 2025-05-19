import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherStationsModule } from './weather-stations/weather-stations.module';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';
import { VariablesModule } from './variables/variables.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
    }),
    WeatherStationsModule,
    DataModule,
    VariablesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
