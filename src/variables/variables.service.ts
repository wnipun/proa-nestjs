import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Variable } from './variable.entity';

@Injectable()
export class VariablesService {
  constructor(
    @InjectRepository(Variable)
    private variablesRepository: Repository<Variable>,
  ) {}

  findAll(): Promise<Variable[]> {
    return this.variablesRepository
      .createQueryBuilder('variable')
      .select([
        'variable.name as name',
        'variable.unit as unit',
        'variable.long_name as long_name',
      ])
      .groupBy('variable.name')
      .getRawMany();
  }
}
