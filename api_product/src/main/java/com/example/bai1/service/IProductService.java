package com.example.bai1.service;

import com.example.bai1.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Page<Product> findAll(Pageable pageable);
    List<Product> listProduct();
    Product create(Product product);

    void delete(int id);

    Optional<Product> findById(int id);

    List<Product> findByName(String nameCategory);

    void update(Product product);
}
