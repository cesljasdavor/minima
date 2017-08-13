import {Injectable} from '@angular/core';
import {Service} from "./model/service";
import {PriceDescription} from "./model/priceDescription";
import {Info} from "./model/info";
import {SocialNetwork} from "./model/socialNetwork";

@Injectable()
export class ApplicationService {

  private homePageImage: string[] = [
    "../../assets/workers/1.jpg",
    "../../assets/moving/1.jpg",
    "../../assets/transport/1.jpg",
    "../../assets/garbage_collection/1.jpg",
    "../../assets/furniture_production/1.jpg",
    "../../assets/demolishing/1.jpg"
  ];

  private services: Service[] = [
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
        "../../assets/workers/1.jpg"
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
        "../../assets/moving/1.jpg",
        "../../assets/moving/2.jpg",
        "../../assets/moving/3.jpg",
        "../../assets/moving/4.jpg",
        "../../assets/moving/5.jpg"
      ]
    ),
    new Service(
      "Transport",
      "\nTvrtka MINIMA usluge nudi usluge prijevoza od točke A do točke B po cijelom gradu Zagrebu\n" +
      "kao i po cijeloj Hrvatskoj, prijevozi iz IKEA, EMMEZETA, LESNINA, itd. sa uslugom montaže\n" +
      "te utovarom/istovarom naših djelatnika.\n\n" +
      "U ponudi imao više kombija raznih veličin.\n" +
      "\tMali kombi (12m³)\n" +
      "\tSrednji kombi (15m³)\n" +
      "\tVeliki kombi (17m³)\n\n" +
      "Cijene za kombi prijevoz se računaju od točke A do točke B.",
      "../../assets/service_representation/transport.jpg",
      [
        new PriceDescription("Mali kombi", 150.0),
        new PriceDescription("Srednji kombi", 250.0),
        new PriceDescription("Veliki kombi", 350.0),
        new PriceDescription("Najam jednog djelatnika po satu", 50.0),
        new PriceDescription("Prijevoz van Zagreba po kilometru", 2.5)
      ],
      [
        "../../assets/transport/1.jpg",
        "../../assets/transport/2.jpg",
        "../../assets/transport/3.jpg"
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
        "../../assets/garbage_collection/2.jpg",
        "../../assets/garbage_collection/3.jpg",
        "../../assets/garbage_collection/4.jpg",
        "../../assets/garbage_collection/5.jpg"

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
        "../../assets/furniture_production/1.jpg",
        "../../assets/furniture_production/2.jpg",
        "../../assets/furniture_production/3.jpg",
        "../../assets/furniture_production/4.jpg",
        "../../assets/furniture_production/5.jpg",
        "../../assets/furniture_production/6.jpg",
        "../../assets/furniture_production/7.jpg"
      ]
    ),
    new Service(
      "Rušenje zidova",
      "\nTvrtka MINIMA usluge nudi usluge rušenja zidova, skidanje pločica, štemanje zidova, dizanje podova i parketa, razbijanje dotrajalih šupa, skidanje krovova od šindre i crijepa, odvoz šute i otpada.\n\n" +
      "Također vršimo usluge građevinskih radova postavljanje knaufa, vodoinstalaterski radovi, električarski radovi, postavljanje parketa itd.",
      "../../assets/service_representation/demolishing.jpg",
      null,
      [
        "../../assets/demolishing/1.jpg",
        "../../assets/demolishing/2.jpg",
        "../../assets/demolishing/3.jpg",
        "../../assets/demolishing/4.jpg",
        "../../assets/demolishing/5.jpg",
      ]
    )
  ];

  private companyData: Info[] = [
    new Info("Naziv tvrtke", "MINIMA usluge j.d.o.o."),
    new Info("Vlasnik", "Mario Vrabelj"),
    new Info("Adresa", "Ivane Brlić Mažuranić 82A, 10000, Zagreb"),
    new Info("OIB", "89265505905"),
    new Info("IBAN", "HR83 2340 0091 1108 7901 3"),
    new Info("Kontakt", "+385 98 200 186"),
    new Info("E-mail", "minimausluge@gmail.com")
  ];

  private googleMapsMeta = {latitude: 45.807044, longitude: 15.887927, zoom: 13};

  private socialNetworks: SocialNetwork[] = [
    new SocialNetwork("https://www.facebook.com/minimausluge/?fref=ts", "fa fa-facebook-official"),
    new SocialNetwork("#", "fa fa-instagram"),
    new SocialNetwork("https://www.linkedin.com/company-beta/25010967", "fa fa-linkedin-square"),
    new SocialNetwork("https://twitter.com/vrba_direktor", "fa fa-twitter-square"),
    new SocialNetwork("https://plus.google.com/u/1/communities/116387305589618999829", "fa fa-google-plus-official"),
  ];


  constructor() {}

  getHomePageImages(): string[] {
    return this.homePageImage;
  }

  getServices(): Service[] {
    return this.services;
  }

  getCompanyData(): Info[] {
    return this.companyData;
  }

  getGoogleMapsMeta(): any {
    return this.googleMapsMeta;
  }

  getSocialNetworks(): SocialNetwork[] {
    return this.socialNetworks;
  }

}
