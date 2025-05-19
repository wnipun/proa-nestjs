import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('variables')
export class Variable {
  @PrimaryColumn()
  var_id: number;

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unit: string;

  @Column()
  long_name: string;
}
