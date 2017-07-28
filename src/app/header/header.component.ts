import {Component, OnInit, EventEmitter} from '@angular/core';
import {MaterializeModule} from "angular2-materialize";
import {Util} from "../util/util";

@Component({
  selector: 'minima-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  sideNavActions = new EventEmitter<string | MaterializeModule>();

  constructor() { }

  ngOnInit() {
    if(Util.isMobile()) {
      this.title = "MINIMA";
    } else {
      this.title = "MINIMA usluge";
    }

  }

  closeSideNav() {
    this.sideNavActions.emit({action: "sideNav", params:['hide']});
  }

}
