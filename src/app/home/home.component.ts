import {Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {Util} from "../util/util";
import {MaterializeModule} from "angular2-materialize";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carouselElement;
  actions = new EventEmitter<string | MaterializeModule>();
  showInitialized: boolean = false;

  images: string[] = [
    "../../assets/home_page_images/1.jpg",
    "../../assets/home_page_images/2.jpg",
    "../../assets/home_page_images/3.jpg",
    "../../assets/home_page_images/4.jpg",
    "../../assets/home_page_images/5.jpg",
    "../../assets/home_page_images/6.jpg",
    "../../assets/home_page_images/7.jpg"
  ];

  constructor() {
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.images = [this.images[0], ...this.images];
      this.carouselElement.nativeElement.classList.toggle("initialized")
      this.actions.emit("carousel");
    },1000);
  }


  isMobile(): boolean {
    return Util.isMobile();
  }

  nextImage(): void {
    this.actions.emit({ action: 'carousel', params: ['next'] });
  }

  previousImage(): void {
    this.actions.emit({ action: 'carousel', params: ['prev'] });
  }
}
