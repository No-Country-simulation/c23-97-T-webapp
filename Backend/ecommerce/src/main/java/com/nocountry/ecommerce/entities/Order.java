package com.nocountry.ecommerce.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "users")
    private List<User> user_id;

    @OneToMany(mappedBy = "order_items")
    private List<OrderItem> order_id;

    @Column(nullable = false)
    private Float total_price;

    @Column(nullable = false)
    private String status;

    private LocalDateTime created_at;

    // - - - - - - - - - - - - - - - - - - - - - - - - - -

    public Order() {
    }

    public Order(Long id, List<User> user_id, Float total_price, String status, LocalDateTime created_at) {
        this.id = id;
        this.user_id = user_id;
        this.total_price = total_price;
        this.status = status;
        this.created_at = created_at;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<User> getUser_id() {
        return user_id;
    }

    public void setUser_id(List<User> user_id) {
        this.user_id = user_id;
    }

    public Float getTotal_price() {
        return total_price;
    }

    public void setTotal_price(Float total_price) {
        this.total_price = total_price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
}