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
  @JoinColumn(name = "creditCardNumber", nullable = false)
  private CreditCardDetail creditCardDetail;

  @ManyToOne
  @JoinColumn(name = "userCredentialId", nullable = false)
  private UserCredential userCredential;

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
}
