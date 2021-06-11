import {Injectable} from '@angular/core';
import {Iword} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaryList: Iword[] = [
    {id: 0, word: 'hello', mean: 'xin chào', type: 'Động từ'},
    {id: 1, word: 'school', mean: 'Trường học', type: 'Danh từ'},
    {id: 2, word: 'hello', mean: 'xin chào', type: 'Động từ'},
    {id: 3, word: 'hello', mean: 'xin chào', type: 'Động từ'},
    {id: 4, word: 'hello', mean: 'xin chào', type: 'Động từ'}
  ];

  constructor() {
  }

  findWord(id: number){
    return this.dictionaryList.find(item => item.id === id);
  }

}
