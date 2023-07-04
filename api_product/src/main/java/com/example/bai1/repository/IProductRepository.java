package com.example.bai1.repository;

import com.example.bai1.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product join category on blogs.category_id = category.id where name_category = ?", nativeQuery = true)
    List<Product> findByName(String nameCategory);

    Page<Product> findAll(Pageable pageable);

    @Query(value = "select * from products join category c on c.id = products.id_type", nativeQuery = true)
    List<Product> getAllProduct();

    @Query(value = "insert into products( code_product ,name, price , amount  , date , description  , id_type) values ( :product.codeProduct, :product.name, :product.price, :product.amount, :product.date, :product.description, :product.category.id)", nativeQuery = true)
    Product createProduct(Product product);

    @Query(value = "delete from products where id = ?", nativeQuery = true)
    void deleteProductById(int id);

    @Query(value = "insert into products( code_product ,name, price , amount  , date , description  , id_type) values ( :product.codeProduct, :product.name, :product.price, :product.amount, :product.date, :product.description, :product.category.id)", nativeQuery = true)
    Product updateProduct(Product product);

    @Query(value = "select * from products where id =?",nativeQuery = true)
    Optional<Product> findProductById(int id);
}
