//Need to fix the columns for this class
package com.pizza.models;

import javax.persistence.*;

@Entity
@Table(name = "Orders")
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "OrderID")
  private Long orderId;

  @Column(name = "CreditCardDetails")
  private Long creditCardDetails;

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

  public Long getCreditCardDetails() {
    return creditCardDetails;
  }

  public void setCreditCardDetails(Long creditCardDetails) {
    this.creditCardDetails = creditCardDetails;
  }
}
