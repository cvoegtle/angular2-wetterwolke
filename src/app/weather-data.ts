import { Location } from "./location";
export interface WeatherData {
  timestamp: string;
  id: string;
  location_short: string;
  location: string;
  localtime: string;
  humidity: number;
  inside_humidity?: number;
  temperature: number;
  inside_temperature?: number;
  rain?: number;
  rain_today?: number;
  raining?: boolean;
  wind?: number;
  watt?: number;
  forecast?: string;

  locationObj?: Location;
}
