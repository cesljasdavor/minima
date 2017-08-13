import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from "../model/service";
import {Util} from "../util/util";
import {ApplicationService} from "../application.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    Util.getFadeAnimation(),
    Util.getFadeAndInAnimation()
  ]
})
export class ServicesComponent implements OnInit {

  @ViewChild('view') view;
  selected: Service;

  services: Service[];

  back: {x: number, y: number};

  //For animations
  titleOptions: any = Util.createScorllimateOptions(50);
  servicesOptions: any[];
  subtitleOptions: any = Util.createScorllimateOptions(10);

  constructor(private appService: ApplicationService) {
  }

  ngOnInit() {
    this.services = this.appService.getServices();
    this.servicesOptions = this.createServicesOptions(); //animations

    this.selected = this.services[0];

    Util.scrollTop();
  }

  createServicesOptions(): any[] {
    const options = [];
    for(let i = 0; i < this.services.length; i++) {
      options.push(Util.createScorllimateOptions(20));
    }

    return options;
  }

  isMobile() {
    return Util.isMobile();
  }

  getLayout(): string {
    return Util.isMobile() ? "" : "row";
  }

  getChooserClass(): string {
    return Util.isMobile() ? "col s12" : "col s4";
  }

  getViewClass(): string {
    return Util.isMobile() ? "card col s12" : "card col s8";
  }

  changeSelected(service: Service) {
    this.selected = service;

    const rect = this.view.nativeElement.getBoundingClientRect();

    this.back = {x: -rect.left,y: -rect.top}

    window.scrollBy(rect.left, rect.top);
  }

  scrollBack() {
    if(this.back === undefined) {
      Util.scrollTop();
    } else {
      window.scrollBy(this.back.x, this.back.y);
    }
  }

  exists(array: any): boolean {
    return array !== undefined &&
      array !== null &&
      array.length > 0;
  }

}
