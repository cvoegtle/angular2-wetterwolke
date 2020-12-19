import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { SettingsComponent } from "./settings/settings.component";
import { AppDiagramComponent } from "./app-diagram/app-diagram.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'diagrams', component: AppDiagramComponent },
  { path: 'diagrams/:location/:image', component: AppDiagramComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}