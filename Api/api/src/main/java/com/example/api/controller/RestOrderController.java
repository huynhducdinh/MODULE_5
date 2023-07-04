package com.example.api.controller;

import com.example.api.model.Orders;
import com.example.api.model.Product;

import com.example.api.service.IOrderService;
import com.example.api.service.IProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api")
@CrossOrigin("*")
public class RestOrderController {
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IProductService iProductService;


    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> showListOrders() {
        List<Orders> ordersList = iOrderService.findAllOrder();
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> showListProduct() {
        List<Product> productList = iProductService.findAllProduct();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }



    @DeleteMapping("/delete/{id}")
    public void deleteOrder(@PathVariable("id") Integer id) {
       iOrderService.deleteOrders(id);
//        return new ResponseEntity<>(check,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Orders> createOrder(@RequestBody Orders orders) {
        iOrderService.createOrder(orders);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
