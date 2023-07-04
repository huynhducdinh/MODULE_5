package com.example.api.model;

import javax.persistence.*;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer codeOrder;
    @Column(name = "purchase_date",columnDefinition = "DATE")
    private String purchaseDate;
    private Integer quantity;
    private Double totals;
    private boolean isStatus=false;
    @ManyToOne
    @JoinColumn()
    private Product product;


    public Orders() {
    }


    public Orders(Integer id, Integer codeOrder, String purchaseDate, Integer quantity, Double totals, boolean isStatus, Product product) {
        this.id = id;
        this.codeOrder = codeOrder;
        this.purchaseDate = purchaseDate;
        this.quantity = quantity;
        this.totals = totals;
        this.isStatus = isStatus;
        this.product = product;
    }

    public boolean isStatus() {
        return isStatus;
    }

    public void setStatus(boolean status) {
        isStatus = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCodeOrder() {
        return codeOrder;
    }

    public void setCodeOrder(Integer codeOrder) {
        this.codeOrder = codeOrder;
    }

    public String getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(String purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getTotals() {
        return totals;
    }

    public void setTotals(Double totals) {
        this.totals = totals;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }


}
