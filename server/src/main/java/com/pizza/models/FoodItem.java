package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "FoodItems")
public class FoodItem {
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "FoodItemId")
  private Long foodItemId;

  @Column(name = "price")
  private Double price;

  @Column(name = "name")
  private String name;

  @JsonIgnore
  @ManyToMany(fetch = FetchType.LAZY,
    cascade = { CascadeType.ALL },
    mappedBy = "foodItems")
  private List<PizzaStore> pizzaStores = new ArrayList<>();

  public FoodItem() {
  }

  public FoodItem(Double price, String name) {
    this.price = price;
    this.name = name;
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

  @Override
  public String toString() {
    return "FoodItem{" +
      "foodItemId=" + foodItemId +
      ", price=" + price +
      ", name='" + name + '\'' +
      ", pizzaStores=" + pizzaStores +
      '}';
  }
}
