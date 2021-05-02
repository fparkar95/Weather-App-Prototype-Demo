import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WeatherDashboardComponent } from "./component/weather-dashboard.component";
import { WeatherDashboardRoutingModule } from "./weather-dashboard-routing.module";

@NgModule({
    declarations: [WeatherDashboardComponent],
    imports: [
        CommonModule,
        WeatherDashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class WeatherDashboardModule {}