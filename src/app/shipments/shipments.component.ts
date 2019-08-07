import { Component, OnInit } from '@angular/core';

import { shipments } from '../shipments';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  shipments = shipments;

  constructor() { }

  ngOnInit() {
  }
  
}
