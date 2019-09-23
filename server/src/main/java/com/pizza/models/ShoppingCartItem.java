package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "ShoppingCartItems")
public class ShoppingCartItem {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "ShoppingCartItemId")
  private Long shoppingCartItemId;

  @Column(name = "Quantity")
  private int quantity;

  @ManyToOne
  @JoinColumn(name = "foodItemId")
  private FoodItem foodItem;

  @ManyToOne
  @JoinColumn(name = "shoppingCartId")
  @JsonIgnore
  private ShoppingCart shoppingCart;

  public ShoppingCartItem() {
  }

  public Long getShoppingCartItemId() {
    return shoppingCartItemId;
  }

  public void setShoppingCartItemId(Long shoppingCartItemId) {
    this.shoppingCartItemId = shoppingCartItemId;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public FoodItem getFoodItem() {
    return foodItem;
  }

  public void setFoodItem(FoodItem foodItem) {
    this.foodItem = foodItem;
  }

  public ShoppingCart getShoppingCart() {
    return shoppingCart;
  }

  public void setShoppingCart(ShoppingCart shoppingCart) {
    this.shoppingCart = shoppingCart;
  }
}
