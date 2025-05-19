import { Controller, Get } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { Variable } from './variable.entity';

@Controller('variables')
export class VariablesController {
  constructor(private variablesService: VariablesService) {}

  @Get()
  findAll(): Promise<Variable[]> {
    return this.variablesService.findAll();
  }
}
