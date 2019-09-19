package com.pizza.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ShoppingCarts")
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

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST
    })
  @JoinTable(name = "ShoppingCarts_has_FoodItems",
    joinColumns = { @JoinColumn(name = "ShoppingCartId") },
    inverseJoinColumns = { @JoinColumn(name = "FoodItemID") })
    List<FoodItem> foodItems = new ArrayList<>();

  @OneToOne(mappedBy = "shoppingCart", cascade = CascadeType.PERSIST)
  private Order order;

  public ShoppingCart() {
  }

  public ShoppingCart(String foodName, double unitPrice, int quantity, double totalPrice) {
    this.foodName = foodName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
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

  public List<FoodItem> getFoodItems() {
    return foodItems;
  }

  public void setFoodItems(List<FoodItem> foodItems) {
    this.foodItems = foodItems;
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




