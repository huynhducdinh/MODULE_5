package com.example.api.service.impl;


import com.example.api.model.Orders;
import com.example.api.repository.IOrderRepository;
import com.example.api.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
  @Autowired
    private IOrderRepository iOrderRepository;


    @Override
    public List<Orders> findAllOrder() {
        return iOrderRepository.findAllOrder();
    }

  @Override
  public boolean deleteOrders(Integer id) {
    iOrderRepository.deleteOrders(id);
    return true;
  }

  @Override
  public void createOrder(Orders orders) {
    iOrderRepository.createOrder(orders.getCodeOrder(),orders.getPurchaseDate(), orders.getQuantity(),orders.getProduct().getId());
  }
}
