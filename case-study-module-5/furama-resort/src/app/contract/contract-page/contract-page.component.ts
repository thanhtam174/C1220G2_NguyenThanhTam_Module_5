import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  contracts:Contract[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
