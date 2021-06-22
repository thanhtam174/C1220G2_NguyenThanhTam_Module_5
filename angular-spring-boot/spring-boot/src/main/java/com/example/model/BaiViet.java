package com.example.model;

import javax.persistence.*;

@Entity
public class BaiViet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String danhMuc;
    private String vungMien;
    private String loaiNguoiDang;
    private String mucDich;
    private String tinhTrang;
    private String diaChi;
    private String dienTich;
    private String huong;
    private String tieuDe;
    private String noiDung;
    private Double gia;
    private String ngayDang;

    public BaiViet() {
    }

    public BaiViet(String danhMuc, String vungMien, String loaiNguoiDang, String mucDich, String tinhTrang, String diaChi, String dienTich, String huong, String tieuDe, String noiDung, Double gia, String ngayDang) {
        this.danhMuc = danhMuc;
        this.vungMien = vungMien;
        this.loaiNguoiDang = loaiNguoiDang;
        this.mucDich = mucDich;
        this.tinhTrang = tinhTrang;
        this.diaChi = diaChi;
        this.dienTich = dienTich;
        this.huong = huong;
        this.tieuDe = tieuDe;
        this.noiDung = noiDung;
        this.gia = gia;
        this.ngayDang = ngayDang;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDanhMuc() {
        return danhMuc;
    }

    public void setDanhMuc(String danhMuc) {
        this.danhMuc = danhMuc;
    }

    public String getVungMien() {
        return vungMien;
    }

    public void setVungMien(String vungMien) {
        this.vungMien = vungMien;
    }

    public String getLoaiNguoiDang() {
        return loaiNguoiDang;
    }

    public void setLoaiNguoiDang(String loaiNguoiDang) {
        this.loaiNguoiDang = loaiNguoiDang;
    }

    public String getMucDich() {
        return mucDich;
    }

    public void setMucDich(String mucDich) {
        this.mucDich = mucDich;
    }

    public String getTinhTrang() {
        return tinhTrang;
    }

    public void setTinhTrang(String tinhTrang) {
        this.tinhTrang = tinhTrang;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getDienTich() {
        return dienTich;
    }

    public void setDienTich(String dienTich) {
        this.dienTich = dienTich;
    }

    public String getHuong() {
        return huong;
    }

    public void setHuong(String huong) {
        this.huong = huong;
    }

    public String getTieuDe() {
        return tieuDe;
    }

    public void setTieuDe(String tieuDe) {
        this.tieuDe = tieuDe;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public Double getGia() {
        return gia;
    }

    public void setGia(Double gia) {
        this.gia = gia;
    }

    public String getNgayDang() {
        return ngayDang;
    }

    public void setNgayDang(String ngayDang) {
        this.ngayDang = ngayDang;
    }
}
