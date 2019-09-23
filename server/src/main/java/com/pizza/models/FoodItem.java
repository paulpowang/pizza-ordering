package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "FoodItems")
public class FoodItem {
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "FoodItemId")
  private Long foodItemId;

  @Column(name = "Price")
  private Double price;

  @Column(name = "Name")
  private String name;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = { CascadeType.PERSIST },
    mappedBy = "foodItems")
  private List<PizzaStore> pizzaStores;

  @JsonIgnore
  @OneToMany(cascade = { CascadeType.PERSIST},
    mappedBy = "shoppingCartItemId")
  private List<ShoppingCartItem> shoppingCartItems;

  public FoodItem() {
  }

  public Long getFoodItemId() {
    return foodItemId;
  }

  public void setFoodItemId(Long foodItemId) {
    this.foodItemId = foodItemId;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<PizzaStore> getPizzaStores() {
    return pizzaStores;
  }

  public void setPizzaStores(List<PizzaStore> pizzaStores) {
    this.pizzaStores = pizzaStores;
  }

}
