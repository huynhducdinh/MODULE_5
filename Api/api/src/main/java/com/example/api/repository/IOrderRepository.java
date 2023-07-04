package com.example.api.repository;


import com.example.api.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders, Integer> {
    @Query(value = "SELECT o FROM Orders As o WHERE o.isStatus=false ")
    List<Orders> findAllOrder();

    @Modifying
    @Transactional
    @Query(value = "UPDATE Orders as o SET o.isStatus=true WHERE o.id=:id")
    void deleteOrders(@Param("id") Integer id);


    @Query(value = "INSERT INTO orders(code_order,purchase_date,`quantity`,product_id) VALUES (:code_order,:purchase_date,:quantity,:product_id)", nativeQuery = true)
    void createOrder(@Param("code_order") Integer code_order, @Param("purchase_date") String purchase_date, @Param("quantity") Integer quantity, @Param("product_id") Integer product_id);

}
