import { WeatherStatLine } from "./weather-stat-line";
export interface WeatherStats {
  id:string;
  kind:string;
  stats: WeatherStatLine[];
}
