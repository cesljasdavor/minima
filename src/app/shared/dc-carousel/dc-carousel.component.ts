import {Component, OnInit, ViewChild, EventEmitter, Input} from '@angular/core';
import {Util} from "../../util/util";
import {MaterializeModule} from "angular2-materialize";

@Component({
  selector: 'dc-carousel',
  templateUrl: './dc-carousel.component.html',
  styleUrls: ['./dc-carousel.component.css']
})
export class DcCarouselComponent implements OnInit {

  @ViewChild('carousel') carouselElement;
  actions = new EventEmitter<string | MaterializeModule>();
  showInitialized: boolean = false;

  @Input()
  images: string[];

  @Input()
  width: number;

  @Input()
  height: number;


  constructor() { }

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
