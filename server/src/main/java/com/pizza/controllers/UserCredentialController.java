package com.pizza.controllers;
import com.pizza.models.CreditCardDetail;
import com.pizza.models.PizzaStore;
import com.pizza.models.ShipmentDetails;
import com.pizza.models.UserCredential;
import com.pizza.repositories.CreditCardRepository;
import com.pizza.repositories.ShipmentDetailsRepository;
import com.pizza.repositories.UserCredentialRepository;
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
public class UserCredentialController {

  @Autowired
  UserCredentialRepository repository;

  @Autowired
  CreditCardRepository creditCardRepository;

  @Autowired
  ShipmentDetailsRepository shipmentDetailsRepository;

  @GetMapping("/signup")
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

  @GetMapping("/signup/{id}")
  public boolean getStoreById(@PathVariable("id") String userCredentialId) {
    Optional<UserCredential> storeData = repository.findById(userCredentialId);
    boolean found = storeData.isPresent();
    System.out.println(found);
    return found;

  }

  @PostMapping(value = "/signup")
  public ResponseEntity<UserCredential> postUser(@RequestBody UserCredential usercredential) {
    try {
      UserCredential users= repository.save(new UserCredential(usercredential.getUserCredentialId(),
        usercredential.getUserType(),
        usercredential.getPassword()));
      return new ResponseEntity<>(users, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @PostMapping(path = "/user/{userId}/addCreditCard", consumes = "application/json")
  public ResponseEntity addCreditCardForUserId(@PathVariable String userId, @RequestBody CreditCardDetail creditCard) {
    Optional<UserCredential> userCredentialData = repository.findById(userId);
    if (!userCredentialData.isPresent())
      return new ResponseEntity(HttpStatus.NOT_FOUND);

    UserCredential userCredential = userCredentialData.get();
    creditCard.setUserCredential(userCredential);
    userCredential.getCreditCardDetails().add(creditCard);
    creditCardRepository.save(creditCard);
    repository.save(userCredential);
    return new ResponseEntity(HttpStatus.CREATED);
  }

  @PostMapping(path = "/user/{userId}/addShipmentDetail", consumes = "application/json")
  public ResponseEntity addShipmentDetail(@PathVariable String userId, @RequestBody ShipmentDetails shipmentDetails) {
    Optional<UserCredential> userData = repository.findById(userId);
    if (!userData.isPresent())
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    UserCredential user = userData.get();
    shipmentDetails.setUserCredential(user);
    shipmentDetailsRepository.save(shipmentDetails);
    return new ResponseEntity(HttpStatus.CREATED);
  }
}
