import { Data } from 'src/data/data.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('weather_stations')
export class WeatherStation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ws_name: string;

  @Column()
  site: string;

  @Column()
  portfolio: string;

  @Column()
  state: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @OneToMany(() => Data, (data) => data.weatherStation)
  data: Data[];
}
