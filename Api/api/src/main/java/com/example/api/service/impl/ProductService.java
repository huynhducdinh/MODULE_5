package com.example.api.service.impl;

import com.example.api.model.Product;
import com.example.api.repository.IProductRepository;
import com.example.api.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Product> findAllProduct() {
        return iProductRepository.findAllProduct();
    }
}
