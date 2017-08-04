import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from "../model/service";
import {PriceDescription} from "../model/priceDescription";
import {Util} from "../util/util";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @ViewChild('view') view;
  selected: Service;

  services: Service[] = [
    new Service(
      "Najam djelatnika za fizičke poslove",
      "\nTvrtka MINIMA usluge ima u ponudi profesionalne i ljubazne djelatnike za obavljenje SVIH VRSTA FIZIČKIH poslova\n" +
      "\t-demontaža/montaža namještaja\n" +
      "\t-selidba unutar Vaših 4 zida\n" +
      "\t-pripreme za selidbu i pakiranje kutija\n" +
      "\t-nošenje stvari na NEKI kat\n\n" +
      "Cijena se računa minimalno 2 djelatnika i 2 sata\n" +
      "Dolazak naših djelatnika unutar Zagreba se NE NAPLAĆUJE\n",
      "../../assets/service_representation/worker.jpg",
      [
        new PriceDescription("Najam jednog djelatnika po satu", 50.0)
      ],
      [
        "../../assets/home_page_images/2.jpg"
      ]
    ),
    new Service(
      "Selidbe",
      "\nTvrtka MINIMA usluge vrši selidbe sa našim utovarom/istovarom, montažom i demontažom namještaja itd.\n" +
      "Imamo dovoljan broj djelatnika te radimo na području grada Zagreba, ali i cijele Hrvatske\n" +
      "Po potrebi dolazimo na BESPLATNU procijenu Vaše selidbe.\n\n" +
      "U ponudi imao više kombija raznih veličin.\n" +
      "\tMali kombi (12m³)\n" +
      "\tSrednji kombi (15m³)\n" +
      "\tVeliki kombi (17m³)\n\n" +
      "Cijene za kombi prijevoz se računaju od točke A do točke B.",
      "../../assets/service_representation/moving.jpg",
      [
        new PriceDescription("Mali kombi", 150.0),
        new PriceDescription("Srednji kombi", 250.0),
        new PriceDescription("Veliki kombi", 350.0),
        new PriceDescription("Najam jednog djelatnika po satu", 50.0)
      ],
      [
        "../../assets/home_page_images/1.jpg",
        "../../assets/home_page_images/3.jpg"
      ]
    ),
    new Service(
      "Odvoz otpada",
      "\nTvrtka MINIMA usluge vrši usluge odvoza otpada, starog namještaja, šute u vrećama, čišćenje tavana, šupa, podruma,\n" +
      "kompletno čišćenje Vaših stanova od nepotrbnih stvari.Po potrebi dolazimo na BESPLATNU procijenu.\n\n" +
      "U ponudi imao više kombija raznih veličina\n" +
      "\tMali kombi (12m³)\n" +
      "\tSrednji kombi (15m³)\n" +
      "\tVeliki kombi (17m³)\n" +
      "Cijene se računaju od Vaše lokacije do deponija.",
      "../../assets/service_representation/garbage.jpg",
      [
        new PriceDescription("Mali kombi", 150.0),
        new PriceDescription("Srednji kombi", 250.0),
        new PriceDescription("Veliki kombi", 350.0),
        new PriceDescription("Najam jednog djelatnika po satu", 50.0),
        new PriceDescription("Naknada za deponij 1/4 m³", 100.0)
      ],
      [
        "../../assets/garbage_collection/1.jpg",
        "../../assets/garbage_collection/2.jpg"
      ]
    ),
    new Service(
      "Izrada namještaja po mjeri",
      "\nVršimo izradu namještaja po mjeri: ormari, ugradbeni ormari, ugradbeni ormari sa kliznim vratima, kreveti,\n" +
      "uredski namještaj, komode, montaža namještaja, kuhinje itd.\n\n" +
      "Izlazimo BESPLATNO kod Vas na mjerenje namještaja koji Vam treba.\n\n" +
      "Rok isuporuke je 25 dana od dana kada je materijal uplaćen.",
      "../../assets/service_representation/furniture.jpg",
      null,
      [
        "../../assets/home_page_images/4.jpg",
        "../../assets/home_page_images/5.jpg",
        "../../assets/home_page_images/6.jpg",
        "../../assets/home_page_images/7.jpg"
      ]
    ),
    new Service(
      "Rušenje zidova",
      "\nTvrtka MINIMA usluge nudi usluge rušenja zidova, skidanje pločica, štemanje zidova, dizanje podova i parketa, razbijanje dotrajalih šupa, skidanje krovova od šindre i crijepa, odvoz šute i otpada.\n\n" +
      "Također vršimo usluge građevinskih radova postavljanje knaufa, vodoinstalaterski radovi, električarski radovi, postavljanje parketa itd.",
      "../../assets/service_representation/demolishing.jpg"
    )
  ];

  constructor() {
  }

  ngOnInit() {
    this.selected = this.services[0];
    window.scroll
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
    console.log("left: " + (rect.left) + " top: " + (rect.top));
    window.scrollBy(rect.left, rect.top);
  }

  exists(array: any): boolean {
    if (array !== undefined &&
      array !== null &&
      array.length > 0) {
      return true;
    }

    return false;
  }

}
