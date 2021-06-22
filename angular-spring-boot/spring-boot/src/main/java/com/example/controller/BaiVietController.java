package com.example.controller;

import com.example.model.BaiViet;
import com.example.service.BaiVietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class BaiVietController {
    @Autowired
    private BaiVietService baiVietService;

    @GetMapping("bai-viet")
    public ResponseEntity<List<BaiViet>> getAll() {
        return new ResponseEntity<>(baiVietService.findAll(), HttpStatus.OK);
    }

    @GetMapping("bai-viet/{id}")
    public ResponseEntity<BaiViet> findById(@PathVariable Integer id) {
        Optional<BaiViet> customerOptional = baiVietService.findById(id);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customerOptional.get(), HttpStatus.OK);
    }

    @PostMapping("bai-viet/create")
    public ResponseEntity<BaiViet> create(@RequestBody BaiViet baiViet){

        return new ResponseEntity<>(baiVietService.save(baiViet),HttpStatus.OK);
    }

    @DeleteMapping("bai-viet/{id}")
    public ResponseEntity<BaiViet> deleteCustomer(@PathVariable Integer id) {
        Optional<BaiViet> customerOptional = baiVietService.findById(id);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        baiVietService.remove(id);
        return new ResponseEntity<>(customerOptional.get(), HttpStatus.NO_CONTENT);
    }
}
