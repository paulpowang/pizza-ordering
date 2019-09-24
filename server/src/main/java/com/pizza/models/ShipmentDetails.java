package com.pizza.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
  @Table(name = "ShipmentDetails")
  public class ShipmentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ShippingID")
    private Long shippingId;

    @Column(name = "Name")
    private String name;

    @Column(name = "Address")
    private String address;

    @Column(name = "City")
    private String city;

    @Column(name = "State")
    private String state;

    @Column(name = "Pin")
    private int pin;

    @Column(name = "MobileNumber")
    private String mobileNumber;

    @Column(name = "Landline")
    private String landline;

    @Column(name = "OrderStatus")
    private String orderStatus;

    @JsonIgnore
    @OneToMany(mappedBy = "shipmentDetails", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    // set nullable to true for function creating.
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="userCredentialId", nullable=true)
    private UserCredential userCredential;

    public Long getShippingId() {
      return shippingId;
    }

    public void setShippingId(Long shippingId) {
      this.shippingId = shippingId;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public String getAddress() {
      return address;
    }

    public void setAddress(String address) {
      this.address = address;
    }

    public String getCity() {
      return city;
    }

    public void setCity(String city) {
      this.city = city;
    }

    public String getState() {
      return state;
    }

    public void setState(String state) {
      this.state = state;
    }

    public int getPin() {
      return pin;
    }

    public void setPin(int pin) {
      this.pin = pin;
    }

    public String getMobileNumber() {
      return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
      this.mobileNumber = mobileNumber;
    }

    public String getLandline() {
      return landline;
    }

    public void setLandline(String landline) {
      this.landline = landline;
    }

    public String getOrderStatus() {
      return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
      this.orderStatus = orderStatus;
    }

    public UserCredential getUserCredential() {
      return userCredential;
    }

    public void setUserCredential(UserCredential userCredential) {
      this.userCredential = userCredential;
    }

  public List<Order> getOrders() {
    return orders;
  }

  public void setOrders(List<Order> orders) {
    this.orders = orders;
  }
}
