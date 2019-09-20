package com.pizza.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "UserCredentials")
public class UserCredential {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "UserCredentialId")
  private Long userCredentialId;

  @Column(name = "UserType")
  @NotNull
  private String userType;

  @Column(name = "Password")
  @NotNull
  private String password;

  @Column(name = "LoginStatus")
  private Date loginStatus;

  @Column(name = "Email")
  @NotNull
  private String email;

  @OneToMany(mappedBy = "userCredential")
  List<Order> orders;

  @OneToMany(mappedBy =  "userCredential")
  List<CreditCardDetail> creditCardDetails;

  @OneToMany(mappedBy =  "userCredential")
  List<ShipmentDetails> shipmentDetails;

  public Long getUserCredentialId() {
    return userCredentialId;
  }

  public void setUserCredentialId(Long userCredentialId) {
    this.userCredentialId = userCredentialId;
  }

  public String getUserType() {
    return userType;
  }

  public void setUserType(String userType) {
    this.userType = userType;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Date getLoginStatus() {
    return loginStatus;
  }

  public void setLoginStatus(Date loginStatus) {
    this.loginStatus = loginStatus;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Order> getOrders() {
    return orders;
  }

  public void setOrders(List<Order> orders) {
    this.orders = orders;
  }

  public List<CreditCardDetail> getCreditCardDetails() {
    return creditCardDetails;
  }

  public void setCreditCardDetails(List<CreditCardDetail> creditCardDetails) {
    this.creditCardDetails = creditCardDetails;
  }

  public List<ShipmentDetails> getShipmentDetails() {
    return shipmentDetails;
  }

  public void setShipmentDetails(List<ShipmentDetails> shipmentDetails) {
    this.shipmentDetails = shipmentDetails;
  }
}
