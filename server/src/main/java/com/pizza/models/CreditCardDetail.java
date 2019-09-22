package com.pizza.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


import java.util.List;

@Entity
@Table(name = "CreditCardDetails")
public class CreditCardDetail {

  @Id
  @Column(name = "CreditCardNumber")
  private Long creditCardNumber;

  @Column(name = "CardHolderName")
  private String cardHolderName;

  @Column(name = "ValidTo")
  private String validTo;

  @Column(name = "Balance")
  private Double balance;

  @JsonIgnore
  @OneToMany(mappedBy = "creditCardDetail")
  List<Order> orders;

  @JsonIgnore
  @ManyToOne
  @JoinColumn(name="userCredentialId", nullable=false)
  private UserCredential userCredential;

  public Long getCreditCardNumber() {
    return creditCardNumber;
  }

  public void setCreditCardNumber(Long creditCardNumber) {
    this.creditCardNumber = creditCardNumber;
  }

  public String getCardHolderName() {
    return cardHolderName;
  }

  public void setCardHolderName(String cardHolderName) {
    this.cardHolderName = cardHolderName;
  }

  public String getValidTo() {
    return validTo;
  }

  public void setValidTo(String validTo) {
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
