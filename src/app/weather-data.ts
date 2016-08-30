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
  forecast?: string;
}
