import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from 'ng-boosted';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherFormComponent,
    WeatherDataComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgBoostedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
