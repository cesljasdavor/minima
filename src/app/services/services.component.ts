import { Component, OnInit } from '@angular/core';
import {Service} from "../model/service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [];

  constructor() { }

  ngOnInit() {
  }

}
