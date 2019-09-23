package com.pizza.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "UserCredentials")
public class UserCredential {
  @Id
  @Column(name = "userCredentialId")
  private String userCredentialId;

  @Column(name = "UserType")
  @NotNull
  private String userType;

  @Column(name = "Password")
  @NotNull
  private String password;

  @Column(name = "LoginStatus")
  private Date loginStatus;

  @OneToMany(mappedBy = "userCredential", cascade = CascadeType.PERSIST)
  private List<Order> orders;

  @OneToMany(mappedBy =  "userCredential", cascade = CascadeType.PERSIST)
  private List<CreditCardDetail> creditCardDetails;

  @OneToMany(mappedBy =  "userCredential", cascade = CascadeType.PERSIST)
  private List<ShipmentDetails> shipmentDetails;

  public UserCredential() {
  }

  public UserCredential(String userCredentialId,
                        @NotNull String userType,
                        @NotNull String password,
                        Date loginStatus, List<Order> orders,
                        List<CreditCardDetail> creditCardDetails,
                        List<ShipmentDetails> shipmentDetails) {
    this.userCredentialId = userCredentialId;
    this.userType = userType;
    this.password = password;
    this.loginStatus = loginStatus;
    this.orders = orders;
    this.creditCardDetails = creditCardDetails;
    this.shipmentDetails = shipmentDetails;
  }

  public String getUserCredentialId() {
    return userCredentialId;
  }

  public void setUserCredentialId(String userCredentialId) {
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
