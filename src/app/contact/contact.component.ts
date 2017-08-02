import { Component, OnInit } from '@angular/core';
import { Info } from "../model/info";
import { Util } from "../util/util";

@Component({
  selector: 'minima-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  googleMapsMeta = {latitude: 45.807044, longitude: 15.887927, zoom: 13};

  companyData: Info[] = [
    new Info("Naziv tvrtke", "MINIMA usluge j.d.o.o."),
    new Info("Vlasnik", "Mario Vrabelj"),
    new Info("Adresa", "Ivane Brlić Mažuranić 82A, 10000, Zagreb"),
    new Info("OIB", "89265505905"),
    new Info("IBAN", "HR83 2340 0091 1108 7901 3"),
    new Info("Kontakt", "+385 98 200 186"),
    new Info("E-mail", "minimausluge@gmail.com")
  ];

  constructor() { }

  ngOnInit() {
  }

  getLayout(): string {
    return Util.isMobile() ? "" : "row";
  }

  isMobile(): boolean {
    return Util.isMobile();
  }
}
