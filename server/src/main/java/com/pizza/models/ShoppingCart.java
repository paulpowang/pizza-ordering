package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "ShoppingCartId")
  private Long shoppingCartId;

  @Column(name = "FoodName")
  private String foodName;

  @Column(name = "UnitPrice")
  private double unitPrice;

  @Column(name = "Quantity")
  private int quantity;

  @Column(name = "TotalPrice")
  private double totalPrice;

  @OneToOne(mappedBy = "shoppingCart", cascade = CascadeType.PERSIST)
  @JsonIgnore
  private Order order;

  @OneToMany(cascade = CascadeType.ALL,
    orphanRemoval = true,
    mappedBy = "shoppingCart")
  private List<ShoppingCartItem> shoppingCartItems;

  public ShoppingCart() {
  }

  public ShoppingCart(String foodName, double unitPrice, int quantity, double totalPrice, Order order, List<ShoppingCartItem> shoppingCartItems) {
    this.foodName = foodName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.order = order;
    this.shoppingCartItems = shoppingCartItems;
  }

  public Long getShoppingCartId() {
    return shoppingCartId;
  }

  public void setShoppingCartId(Long shoppingCartId) {
    this.shoppingCartId = shoppingCartId;
  }

  public String getFoodName() {
    return foodName;
  }

  public void setFoodName(String foodName) {
    this.foodName = foodName;
  }

  public double getUnitPrice() {
    return unitPrice;
  }

  public void setUnitPrice(double unitPrice) {
    this.unitPrice = unitPrice;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public double getTotalPrice() {
    return totalPrice;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public void setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
  }

}




