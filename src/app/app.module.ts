import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { GaugesComponent } from './gauges/gauges.component';
import { ChartsComponent } from './charts/charts.component';

import { ChartModule} from '@syncfusion/ej2-angular-charts'
import { CategoryService,LineSeriesService,TooltipService } from '@syncfusion/ej2-angular-charts'

import { NgApexchartsModule } from 'ng-apexcharts'


@NgModule({
  declarations: [
    AppComponent,
    DropdownsComponent,
    GaugesComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgApexchartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  providers: [CategoryService,LineSeriesService,TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
