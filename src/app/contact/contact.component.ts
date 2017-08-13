import { Component, OnInit } from '@angular/core';
import { Info } from "../model/info";
import { Util } from "../util/util";
import {ApplicationService} from "../application.service";
import {SocialNetwork} from "../model/socialNetwork";

@Component({
  selector: 'minima-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    Util.getFadeAnimation(),
    Util.getFadeAndInAnimation()
  ]
})
export class ContactComponent implements OnInit {
  googleMapsMeta;

  companyData: Info[];

  socialNetworks: SocialNetwork[];

  //For animations
  titleOptions: any = Util.createScorllimateOptions(50);
  companyDataOptions: any = Util.createScorllimateOptions(20);
  socialNetworkOptions: any = Util.createScorllimateOptions(33)
  googleMapOptions: any = Util.createScorllimateOptions(10);

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.googleMapsMeta = this.appService.getGoogleMapsMeta();

    this.companyData = this.appService.getCompanyData();

    this.socialNetworks = this.appService.getSocialNetworks();

    Util.scrollTop();
  }

  getLayout(): string {
    return Util.isMobile() ? "" : "row";
  }
}
