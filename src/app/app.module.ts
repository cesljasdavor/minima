import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MaterializeModule} from "angular2-materialize";
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import {CarouselModule} from "ngx-bootstrap";
import {AgmCoreModule} from "@agm/core";
import { DcCarouselComponent } from './shared/dc-carousel/dc-carousel.component';
import {ApplicationService} from "./application.service";
import {Ng2ScrollimateModule} from "ng2-scrollimate";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    DcCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArPrmq-j9vPUdWAWFh1zwtxVqxtHltPlI'
    }),
    Ng2ScrollimateModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
