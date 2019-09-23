package com.pizza.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "FoodItems")
public class FoodItem {
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "foodItemId")
  private Long foodItemId;

  @Column(name = "price")
  @NotNull
  private Double price;

  @Column(name = "name")
  @NotNull
  private String name;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST
    },
    mappedBy = "foodItems")
  @JsonIgnore
  private Set<PizzaStore> pizzaStores;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST
    },
    mappedBy = "foodItems")
  @JsonIgnore
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

  public Set<PizzaStore> getPizzaStores() {
    return pizzaStores;
  }

  public void setPizzaStores(Set<PizzaStore> pizzaStores) {
    this.pizzaStores = pizzaStores;
  }

  public List<ShoppingCart> getShoppingCarts() {
    return shoppingCarts;
  }

  public void setShoppingCarts(List<ShoppingCart> shoppingCarts) {
    this.shoppingCarts = shoppingCarts;
  }
}
