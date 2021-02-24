import { Component, OnInit } from '@angular/core';
import './banner.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  swiper:any;
  constructor() { }

  ngOnInit(): void {

  }



}

