export interface WeatherStatLine {
  range:string;
  minTemperature:number;
  maxTemperature:number;
  rain?:number;
  solarRadiationMax?:number;
  kwh?:number;
}
