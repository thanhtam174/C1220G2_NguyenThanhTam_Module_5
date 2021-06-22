package com.example.service;

import com.example.model.BaiViet;

import java.util.List;
import java.util.Optional;

public interface BaiVietService {
    List<BaiViet> findAll();

    BaiViet save(BaiViet baiViet);

    Optional<BaiViet> findById(Integer id);

    void remove(Integer id);
}
