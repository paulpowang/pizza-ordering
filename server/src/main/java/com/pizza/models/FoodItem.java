package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "FoodItems")
public class FoodItem {
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "FoodItemId")
  private Long foodItemId;

  @Column(name = "price")
  @NotNull
  private Double price;

  @Column(name = "name")
  @NotNull
  private String name;

  @JsonIgnore
  @ManyToMany(fetch = FetchType.LAZY,
    cascade = { CascadeType.PERSIST },
    mappedBy = "foodItems")
  private Set<PizzaStore> pizzaStores;

  @JsonIgnore
  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST
    },
    mappedBy = "foodItems")
  private List<ShoppingCart> shoppingCarts;

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
