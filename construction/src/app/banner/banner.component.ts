import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
// import Swiper from 'swiper';
  // import Swiper styles
  import './banner.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit,AfterViewInit {
  swiper:any;
  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }



}

