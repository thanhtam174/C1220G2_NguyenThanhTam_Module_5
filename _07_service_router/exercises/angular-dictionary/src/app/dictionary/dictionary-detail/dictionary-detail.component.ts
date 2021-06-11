import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {Iword} from '../../model/iword';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  detail: Iword;

  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   let idWord = this.activatedRoute.snapshot.params.id;
   this.getDetail(Number(idWord));
  }

  getDetail(id:number){
    this.detail = this.dictionaryService.findWord(id);
  }
}
