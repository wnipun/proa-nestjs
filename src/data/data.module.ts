import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  providers: [],
  controllers: [],
})
export class DataModule {}
