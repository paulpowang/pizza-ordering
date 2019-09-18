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
  private String email;

  @OneToMany(mappedBy = "userCredential")
  List<Order> orders;

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
}
