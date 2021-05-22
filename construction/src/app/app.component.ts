import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import './menu/menu.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JJ Enterprises - Madurai | Building Materials Dealer - Madurai | AL Aqua Pump Dealer - Madurai';
  constructor(private titleService:Title, private metaService:Meta ) {}
  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'description', content: 'JJ Enterprises Madurai, Al Auqa Pump Distributor Madurai, We Provide Al Aqua pump, Submersible Pump, Sub Motor, PP Pump CALL 8344428136.' },
      { name: 'keywords', content: 'JJ Enterprises - Madurai,Building Materials Dealer - Madurai,AL Aqua Pump Dealer - Madurai,Submersible Pump Dealer - Madurai,Sub Motor Dealer - Madurai,Raj Adaptor Dealer - Madurai,PP Pump Dealer - Madurai,Coloumn Pipe Dealer - Madurai,Submersible Cable Dealer - Madurai,Pvc Pipes Dealer - Madurai,Bore Clamp Dealer - Madurai,Bore Cover Dealer - Madurai,Water Tank Dealer - Madurai,Tape Roll Dealer - Madurai,Motor Starter Dealer - Madurai,ELGR Dol Starter Dealer - Madurai,Sub Control Panel Dealer - Madurai,Dry Run Panel Dealer - Madurai,LED Lightings Dealer - Madurai,Electricals Goods Dealer - Madurai,Plumbing Goods Dealer - Madurai,Fan Dealer - Madurai,Single Phase Panel Supplier - Madurai,Three Phase Panel Supplier - Madurai,Unique Dol Starter and Panel Dealer - Madurai,Al Auqa Pump Distributor - Madurai ,Pride Tap Distributor - Madurai.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Makarios Digital' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-05-14', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ])
  }
}

