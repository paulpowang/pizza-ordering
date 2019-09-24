package com.pizza.models;

import javax.persistence.*;

@Entity
@Table(name = "Orders")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "OrderID")
  private Long orderId;

  @OneToOne(cascade = CascadeType.PERSIST)
  @JoinColumn (name = "shoppingCartId")
  private ShoppingCart shoppingCart;

  @OneToOne(cascade = CascadeType.PERSIST)
  @JoinColumn (name = "shippingID")
  private ShipmentDetails shipmentDetails;

  @ManyToOne
  @JoinColumn(name = "creditCardNumber")
  private CreditCardDetail creditCardDetail;

  @ManyToOne
  @JoinColumn(name = "userCredentialId")
  private UserCredential userCredential;

  public Order() {
  }

  public Order(ShoppingCart shoppingCart, ShipmentDetails shipmentDetails, CreditCardDetail creditCardDetail) {
    this.shoppingCart = shoppingCart;
    this.shipmentDetails = shipmentDetails;
    this.creditCardDetail = creditCardDetail;
  }

  public Long getOrderId() {
    return orderId;
  }

  public void setOrderId(Long orderId) {
    this.orderId = orderId;
  }

  public ShoppingCart getShoppingCart() {
    return shoppingCart;
  }

  public void setShoppingCart(ShoppingCart shoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  public ShipmentDetails getShipmentDetails() {
    return shipmentDetails;
  }

  public void setShipmentDetails(ShipmentDetails shipmentDetails) {
    this.shipmentDetails = shipmentDetails;
  }

  public CreditCardDetail getCreditCardDetail() {
    return creditCardDetail;
  }

  public void setCreditCardDetail(CreditCardDetail creditCardDetail) {
    this.creditCardDetail = creditCardDetail;
  }

  public UserCredential getUserCredential() {
    return userCredential;
  }

  public void setUserCredential(UserCredential userCredential) {
    this.userCredential = userCredential;
  }

  @Override
  public String toString() {
    return "Order{" +
      "orderId=" + orderId +
      ", shoppingCart=" + shoppingCart +
      ", shipmentDetails=" + shipmentDetails +
      ", creditCardDetail=" + creditCardDetail +
      ", userCredential=" + userCredential +
      '}';
  }
}
