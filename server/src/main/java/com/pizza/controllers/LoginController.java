package com.pizza.controllers;
import com.pizza.models.PizzaStore;
import com.pizza.models.UserCredential;
import com.pizza.repositories.LoginRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class LoginController {

  @Autowired
  LoginRepository repository;

  @GetMapping("/login")
  public ResponseEntity<List<UserCredential>> getAllStores() {
    List<UserCredential> users = new ArrayList<>();
    try {
      repository.findAll().forEach(users::add);

      if (users.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/login/{userCredentialId}")
  public ResponseEntity<UserCredential> getByEmail(@PathVariable(value = "userCredentialId") String userCredentialId)
  {
    Optional<UserCredential> optionalUserCredential = repository.findById(userCredentialId);

    if (optionalUserCredential.isPresent())
    {
      return new ResponseEntity<>(optionalUserCredential.get(), HttpStatus.OK);
    }

    else
    {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/login/update/{userCredentialId}")
  public ResponseEntity<UserCredential> updateUser(@PathVariable("userCredentialId") String userCredentialId, @RequestBody UserCredential userCredential)
  {
    Optional<UserCredential> userData = repository.findById(userCredentialId);

    if (userData.isPresent()) {
      UserCredential _user = userData.get();
      _user.setPassword(userCredential.getPassword());
      _user.setUserType(userCredential.getUserType());
      _user.setLoginStatus(userCredential.getLoginStatus());
      return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}

