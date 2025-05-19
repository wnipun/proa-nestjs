import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variable } from './variable.entity';
import { VariablesService } from './variables.service';
import { VariablesController } from './variables.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Variable])],
  providers: [VariablesService],
  controllers: [VariablesController],
})
export class VariablesModule {}
