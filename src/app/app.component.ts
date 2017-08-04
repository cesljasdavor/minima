import { Component } from '@angular/core';
import {Util} from "./util/util";

@Component({
  selector: 'minima-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMobile(): boolean {
    return Util.isMobile();
  }
}
