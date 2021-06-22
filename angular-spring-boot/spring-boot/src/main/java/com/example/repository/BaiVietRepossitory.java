package com.example.repository;

import com.example.model.BaiViet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaiVietRepossitory extends JpaRepository<BaiViet,Integer> {

}
