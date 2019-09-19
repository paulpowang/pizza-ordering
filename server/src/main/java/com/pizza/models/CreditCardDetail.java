package com.pizza.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CreditCardDetails")
public class CreditCardDetail {
  @Id
  @Column(name = "CreditCardNumber")
  private String creditCardNumber;

  @Column(name = "ValidFrom")
  private Date validFrom;

  @Column(name = "ValidTo")
  private Date validTo;

  @Column(name = "Balance")
  private Double balance;

  @OneToMany(mappedBy = "creditCardDetail")
  List<Order> orders;

  @ManyToOne
  @JoinColumn(name="userCredentialId", nullable=false)
  private UserCredential userCredential;

  public String getCreditCardNumber() {
    return creditCardNumber;
  }

  public void setCreditCardNumber(String creditCardNumber) {
    this.creditCardNumber = creditCardNumber;
  }

  public Date getValidFrom() {
    return validFrom;
  }

  public void setValidFrom(Date validFrom) {
    this.validFrom = validFrom;
  }

  public Date getValidTo() {
    return validTo;
  }

  public void setValidTo(Date validTo) {
    this.validTo = validTo;
  }

  public Double getBalance() {
    return balance;
  }

  public void setBalance(Double balance) {
    this.balance = balance;
  }

  public List<Order> getOrders() {
    return orders;
  }

  public void setOrders(List<Order> orders) {
    this.orders = orders;
  }

  public UserCredential getUserCredential() {
    return userCredential;
  }

  public void setUserCredential(UserCredential userCredential) {
    this.userCredential = userCredential;
  }
}
