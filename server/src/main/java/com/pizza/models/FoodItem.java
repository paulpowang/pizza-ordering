package com.pizza.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FoodItems")
public class FoodItem {
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "foodItemId")
  private Long foodItemId;

  @Column(name = "price")
  private Double price;

  @Column(name = "name")
  private String name;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
    },
    mappedBy = "foodItems")
  private Set<PizzaStore> pizzaStores = new HashSet<>();


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
}
