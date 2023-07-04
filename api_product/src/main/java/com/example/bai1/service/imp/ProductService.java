package com.example.bai1.service.imp;

import com.example.bai1.model.Product;
import com.example.bai1.repository.IProductRepository;
import com.example.bai1.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return this.productRepository.findAll(pageable);
    }

    @Override
    public List<Product> listProduct() {
        return productRepository.getAllProduct();
    }

    @Override
    public Product create(Product product) {
        return this.productRepository.createProduct(product);
    }

    @Override
    public void delete(int id) {
        this.productRepository.deleteProductById(id);
    }

    @Override
    public Optional<Product> findById(int id) {
        return productRepository.findProductById(id);
    }

    @Override
    public List<Product> findByName(String nameCategory) {
        return this.productRepository.findByName(nameCategory);
    }

    @Override
    public void update(Product product) {
        this.productRepository.updateProduct(product);
    }

}
