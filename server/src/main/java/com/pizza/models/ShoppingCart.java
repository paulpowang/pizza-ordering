package com.pizza.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

  @OneToOne(mappedBy = "shoppingCart", cascade = CascadeType.ALL)
  @JsonIgnore
  private Order order;

  @OneToMany(cascade = CascadeType.ALL,
    orphanRemoval = true,
    mappedBy = "shoppingCart")
  @OnDelete(action = OnDeleteAction.CASCADE)
  private List<ShoppingCartItem> shoppingCartItems = new ArrayList<>();

  public ShoppingCart() {
  }

  public ShoppingCart(Order order, List<ShoppingCartItem> shoppingCartItems) {
    this.order = order;
    this.shoppingCartItems = shoppingCartItems;
  }

  public Long getShoppingCartId() {
    return shoppingCartId;
  }

  public void setShoppingCartId(Long shoppingCartId) {
    this.shoppingCartId = shoppingCartId;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public List<ShoppingCartItem> getShoppingCartItems() {
    return shoppingCartItems;
  }

  public void setShoppingCartItems(List<ShoppingCartItem> shoppingCartItems) {
    this.shoppingCartItems = shoppingCartItems;
  }

  @Override
  public String toString() {
    return "ShoppingCart{" +
      "shoppingCartId=" + shoppingCartId +
      ", order=" + order +
      ", shoppingCartItems=" + shoppingCartItems +
      '}';
  }


}




