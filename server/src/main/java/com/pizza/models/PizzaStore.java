package com.pizza.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "PizzaStores")
public class PizzaStore {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "StoreID")
  private Long storeId;

  @Column(name = "StoreName")
  private String storeName;

  @Column(name = "city")
  private String city;

  @Column(name = "state")
  private String state;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST,
    })
  @JoinTable(name = "PizzaStores_has_FoodItems",
    joinColumns = { @JoinColumn(name = "PizzaStoreID") },
    inverseJoinColumns = { @JoinColumn(name = "FoodItemID") })
  private Set<FoodItem> foodItems = new HashSet<>();

  public String getStoreName() {
    return storeName;
  }

  public void setStoreName(String storeName) {
    this.storeName = storeName;
  }

  public Long getStoreID() {
      return storeId;
  }

  public void setStoreID(Long storeID) {
    storeId = storeID;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }
}
