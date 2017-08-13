import { Component, OnInit } from '@angular/core';
import {Util} from "../util/util";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    Util.getFadeAnimation(),
    Util.getFadeAndInAnimation()
  ]
})
export class AboutComponent implements OnInit {

  private noOfParagraphs = 9;

  fractalImageOptions: any = Util.createScorllimateOptions(50);
  textOptions: any[] = this.createTextOptions();

  constructor() { }

  ngOnInit() {
    this.createTextOptions();

    Util.scrollTop();
  }

  createTextOptions(): any[] {
    const options = [];
    for(let i = 0; i < this.noOfParagraphs; i++) {
      options.push(Util.createScorllimateOptions(30));
    }

    return options;
  }
}
