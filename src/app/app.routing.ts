import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usluge', component: ServicesComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'o-nama', component: AboutComponent},

  //any other -> back to home
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
