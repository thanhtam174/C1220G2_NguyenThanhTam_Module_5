import { Component, OnInit } from '@angular/core';
import {BaiViet} from '../../bai-viet/bai-viet';
import {Router} from '@angular/router';
import {NhaDatService} from '../../service/nha-dat.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page:number =1;
  pageSize:number=3;
  subscription:Subscription;
  tempId:number;
  baiViet:BaiViet;
  textShow:string;

  cacBaiViet: BaiViet[]=[];
  searchByDienTich: number;
  searchByHuong: string='';
  searchByGia: number;

  constructor(private nhaDatService:NhaDatService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.subscription=this.nhaDatService.getAll().subscribe(
      value => {
        this.cacBaiViet=value
      },error => {
        console.log(error)
      },
    );
  }

  // searchApi() {
  //     this.nhaDatService.search(this.searchByDienTich,this.searchByHuong,this.searchByGia).subscribe(value => {
  //       this.cacBaiViet=value;
  //     });
  // }

  send(id: number) {
    this.tempId = id;
    this.nhaDatService.findById(id).subscribe(data =>{
      this.baiViet = data;
      this.textShow = this.baiViet.tieuDe;
    });
  }
  deleteCustomer(){
    let c = this.nhaDatService.deleteById(this.tempId).subscribe(() => {
      this.loadList();
    },e =>{
      console.log(e)
    });
  }
}
