package com.example.bai1.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String codeProduct;
    private int amount;
    private String date;
    private String description;
    private String name;
    private String price;
    @ManyToOne
    @JoinColumn(name = "id_type")
    private Category category;

    public Product() {
    }

    public Product(int id, String codeProduct, int amount, String date, String description, String name, String price, Category category) {
        this.id = id;
        this.codeProduct = codeProduct;
        this.amount = amount;
        this.date = date;
        this.description = description;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public String getCodeProduct() {
        return codeProduct;
    }

    public void setCodeProduct(String codeProduct) {
        this.codeProduct = codeProduct;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
