package com.example.api.service;


import com.example.api.model.Orders;

import java.util.List;

public interface IOrderService {
    List<Orders> findAllOrder();

    boolean deleteOrders(Integer id);

    void createOrder(Orders orders);

}
