package com.pizza.models;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CreditCardDetails")
public class CreditCardDetail {
  @Id
  @Column(name = "CreditCardNumber")
  private String creditCardNumber;

  @Column(name = "CardHolderName")
  @NotNull
  private String cardHolderName;

  @Column(name = "ValidTo")
  @NotNull
  private String validTo;

  @Column(name = "Balance", columnDefinition = "number(10,2) default 0.0")
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
