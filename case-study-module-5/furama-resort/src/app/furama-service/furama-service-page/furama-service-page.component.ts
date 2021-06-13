import { Component, OnInit } from '@angular/core';
import {FuramaService} from '../../model/furama-service';

@Component({
  selector: 'app-furama-service-page',
  templateUrl: './furama-service-page.component.html',
  styleUrls: ['./furama-service-page.component.css']
})
export class FuramaServicePageComponent implements OnInit {

  services: FuramaService[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
