package com.example.service;

import com.example.model.BaiViet;
import com.example.repository.BaiVietRepossitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BaiVietServiceImpl implements BaiVietService{
    @Autowired
    private BaiVietRepossitory baiVietRepossitory;

    @Override
    public List<BaiViet> findAll() {
        return baiVietRepossitory.findAll();
    }

    @Override
    public BaiViet save(BaiViet baiViet) {
        return baiVietRepossitory.save(baiViet);
    }

    @Override
    public Optional<BaiViet> findById(Integer id) {
        return baiVietRepossitory.findById(id);
    }

    @Override
    public void remove(Integer id) {
        baiVietRepossitory.deleteById(id);
    }

}
