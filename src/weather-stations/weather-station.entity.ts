import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
