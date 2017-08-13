import { Component, OnInit } from '@angular/core';
import {Util} from "../util/util";

@Component({
  selector: 'minima-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    Util.getFadeAnimation()
  ]
})
export class FooterComponent implements OnInit {

  footerOptions: any = Util.createScorllimateOptions(30);

  constructor() { }

  ngOnInit() {
  }

}
