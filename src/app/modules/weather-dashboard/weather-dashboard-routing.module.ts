import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherDashboardComponent } from "./component/weather-dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: WeatherDashboardComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherDashboardRoutingModule{}