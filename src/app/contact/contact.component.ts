import { Component, OnInit } from '@angular/core';
import {Entry} from "../model/entry";
import {Util} from "../util/util";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  googleMapsMeta = {latitude: 45.807044, longitude: 15.887927, zoom: 13};

  companyData: Entry[] = [
    new Entry("Naziv tvrtke", "MINIMA usluge j.d.o.o."),
    new Entry("Vlasnik", "Mario Vrabelj"),
    new Entry("Adresa", "Ivane Brlić Mažuranić 82A, 10000, Zagreb"),
    new Entry("OIB", "89265505905"),
    new Entry("IBAN", "HR83 2340 0091 1108 7901 3"),
    new Entry("Kontakt", "+385 98 200 186"),
    new Entry("E-mail", "minimausluge@gmail.com")
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
