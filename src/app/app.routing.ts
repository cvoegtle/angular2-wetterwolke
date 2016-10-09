import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { SettingsComponent } from "./settings/settings.component";
import { AppDiagramComponent } from "./app-diagram/app-diagram.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  { path: 'weather', component: WeatherComponent },
  { path: 'diagrams', component: AppDiagramComponent },
  { path: 'settings', component: SettingsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);