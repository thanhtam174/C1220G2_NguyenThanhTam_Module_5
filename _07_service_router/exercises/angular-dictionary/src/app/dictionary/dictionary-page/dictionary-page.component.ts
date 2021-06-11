import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {Iword} from '../../model/iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  wordList: Iword[]=[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.wordList = this.dictionaryService.dictionaryList;
  }

}
