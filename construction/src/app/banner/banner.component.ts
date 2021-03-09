import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
  // import Swiper styles

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit,AfterViewInit {
  swiper:any;
  constructor() { }
  ngAfterViewInit(): void {
     this.swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {

  }



}

