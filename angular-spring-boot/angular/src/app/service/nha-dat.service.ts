import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BaiViet} from '../bai-viet/bai-viet';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NhaDatService {

  API_URL:string='http://localhost:8080/bai-viet/';

  constructor(private http:HttpClient) { }

  getAll(): Observable<BaiViet[]> {
    return this.http.get<BaiViet[]>(this.API_URL);
  }


  findById(baiVietId: number): Observable<BaiViet> {
    return this.http.get<BaiViet>( this.API_URL + baiVietId);
  }

  deleteById(baiVietId: number): Observable<BaiViet> {
    return this.http.delete<BaiViet>( this.API_URL + baiVietId);
  }

  add(baiVietMoi: BaiViet): Observable<BaiViet> {
    console.log(baiVietMoi);
    return this.http.post<BaiViet>(this.API_URL+'/create', baiVietMoi);
  }

  // search(dienTich:number, huong:string, gia: number): Observable<BaiViet[]>{
  //   let urlSearch='';
  //   if (dienTich!=null){
  //     urlSearch+='dienTich='+dienTich+'&';
  //   }
  //   if (huong!=''){
  //     urlSearch+='huong='+huong+'&';
  //   }
  //   if (gia!=null){
  //     urlSearch+='gia='+gia;
  //   }
  //   console.log(this.API_URL+'?'+urlSearch);
  //   return this.http.get<BaiViet[]>(this.API_URL+'?'+urlSearch);
  // }
}
