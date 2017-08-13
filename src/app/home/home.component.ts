import {Component, OnInit, ViewChild, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {Util} from "../util/util";
import {MaterializeModule} from "angular2-materialize";
import {ApplicationService} from "../application.service";

@Component({
  selector: 'minima-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    Util.getFadeAndInAnimation(),
    Util.getFadeAnimation()
  ]
})
export class HomeComponent implements OnInit {

  images: string[];
  titleOptions: any = Util.createScorllimateOptions(50);
  textOptions: any[] = this.createTextOptions();
  imagesOptions: any = Util.createScorllimateOptions(25);

  constructor(private appService: ApplicationService) {
  }

  ngOnInit() {


    this.images = this.appService.getHomePageImages();

    Util.scrollTop();
  }

  createTextOptions(): any[] {
    const options = [];
    for(let i=0; i < 3; i++) {
      options.push(Util.createScorllimateOptions(20));
    }

    return options;
  }
}
