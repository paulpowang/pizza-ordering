package com.pizza.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;


import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "CreditCardDetails")
public class CreditCardDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "CreditCardId")
	private long creditCardId;

  @Column(name = "CreditCardNumber")
  private String creditCardNumber;

  @Column(name = "CardHolderName")
  private String cardHolderName;

  @Column(name = "ValidTo")
  private String validTo;

  @Column(name = "Balance")
  private Double balance;

  @JsonIgnore
  @OneToMany(mappedBy = "creditCardDetail")
  List<Order> orders = new ArrayList<>();

  //Changed nullable to true for now, or creditcard cannot be created
  @JsonIgnore
  @ManyToOne
  @JoinColumn(name="userCredentialId", nullable = false)
  private UserCredential userCredential;

  public long getCreditCardId() {
    return creditCardId;
  }

  public void setCreditCardId(long creditCardId) {
    this.creditCardId = creditCardId;
  }

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

  @Override
  public String toString() {
    return "CreditCardDetail{" +
      "creditCardId=" + creditCardId +
      ", creditCardNumber='" + creditCardNumber + '\'' +
      ", cardHolderName='" + cardHolderName + '\'' +
      ", validTo='" + validTo + '\'' +
      ", balance=" + balance +
      ", orders=" + orders +
      ", userCredential=" + userCredential +
      '}';
  }
}
