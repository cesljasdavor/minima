import {Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {Util} from "../util/util";
import {MaterializeModule} from "angular2-materialize";

@Component({
  selector: 'minima-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  }

}
