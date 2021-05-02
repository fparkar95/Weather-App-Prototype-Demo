import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { WeatherDashboardComponent } from './modules/weather-dashboard/component/weather-dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: WeatherDashboardComponent, 
    loadChildren: () => import('./modules/weather-dashboard/weather-dashboard.module').then(m => m.WeatherDashboardModule),
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m=> m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
