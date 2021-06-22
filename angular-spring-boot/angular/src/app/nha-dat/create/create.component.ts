import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaDatService} from '../../service/nha-dat.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaiViet} from '../../bai-viet/bai-viet';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm = new FormGroup({
    danhMuc: new FormControl(''),
    vungMien: new FormControl(''),
    loaiNguoiDang: new FormControl(''),
    mucDich: new FormControl(''),
    tinhTrang: new FormControl(''),
    diaChi: new FormControl('', [Validators.required]),
    dienTich: new FormControl('',[Validators.required,Validators.min(20)]),
    huong: new FormControl(''),
    tieuDe: new FormControl('', [Validators.required]),
    noiDung: new FormControl('', [Validators.required]),
    gia: new FormControl('', [Validators.required, Validators.min(100000000)]),
    ngayDang: new FormControl('', [Validators.required]),
  });

  baiVietMoi:BaiViet;

  constructor(private nhaDatService: NhaDatService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.baiVietMoi = this.createForm.value;
    this.nhaDatService.add(this.baiVietMoi).subscribe(value => {
        this.showSuccess();
      }, error => {

      },
      () => {
        this.router.navigateByUrl('/nha-dat')
      }
    );

  }

  showSuccess() {
    this.toastr.success('Create Successfully!', 'Notification!',{
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }

  get diaChi() {
    return this.createForm.get('diaChi');
  }

  get dienTich() {
    return this.createForm.get('dienTich');
  }

  get noiDung() {
    return this.createForm.get('noiDung');
  }

  get gia() {
    return this.createForm.get('gia');
  }

  get ngayDang() {
    return this.createForm.get('ngayDang');
  }
  get tieuDe() {
    return this.createForm.get('tieuDe');
  }

}
