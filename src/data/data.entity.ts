import { WeatherStation } from 'src/weather-stations/weather-station.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('data')
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WeatherStation, (weatherStation) => weatherStation.data)
  @JoinColumn({ name: 'weather_station_id' })
  weatherStation: WeatherStation;

  @Column()
  AirT_inst: string;

  @Column()
  GHI_inst: string;

  @Column()
  avg_Wm2: string;

  @Column()
  avg_airTemp: string;

  @Column()
  WS_avg: string;

  @Column()
  WD_avg: string;

  @Column({ type: 'datetime' })
  timestamp: string;
}
