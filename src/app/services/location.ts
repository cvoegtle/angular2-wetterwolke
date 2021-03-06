import { Diagram } from "./diagram";
export interface Location {
  location:string;
  city:string;
  cityShortcut:string;
  weatherForecast:string;
  windRelevant:boolean;
  enabled: boolean;
  diagrams?: Diagram[];
}
