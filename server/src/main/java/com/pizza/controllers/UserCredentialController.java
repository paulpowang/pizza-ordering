package com.pizza.controllers;
import com.pizza.models.*;
import com.pizza.repositories.CreditCardRepository;
import com.pizza.repositories.OrderRepository;
import com.pizza.repositories.ShipmentDetailsRepository;
import com.pizza.repositories.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserCredentialController {

  @Autowired
  UserCredentialRepository userCredentialRepository;

  @Autowired
  CreditCardRepository creditCardRepository;

  @Autowired
  ShipmentDetailsRepository shipmentDetailsRepository;

  @Autowired
  OrderRepository orderRepository;

  @GetMapping("/signup")
  public ResponseEntity<List<UserCredential>> getAllStores() {
    List<UserCredential> users = new ArrayList<>();
    try {
      userCredentialRepository.findAll().forEach(users::add);

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
    Optional<UserCredential> storeData = userCredentialRepository.findById(userCredentialId);
    boolean found = storeData.isPresent();
    System.out.println(found);
    return found;

  }

  @PostMapping(value = "/signup")
  public ResponseEntity<UserCredential> postUser(@RequestBody UserCredential usercredential) {
    try {
      UserCredential users= userCredentialRepository.save(new UserCredential(usercredential.getUserCredentialId(),
        usercredential.getUserType(),
        usercredential.getPassword()));
      return new ResponseEntity<>(users, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @PostMapping(path = "/user/{userId}/addCreditCard", consumes = "application/json")
  public ResponseEntity addCreditCardForUserId(@PathVariable String userId, @RequestBody CreditCardDetail creditCard) {
    Optional<UserCredential> userCredentialData = userCredentialRepository.findById(userId);
    if (!userCredentialData.isPresent())
      return new ResponseEntity(HttpStatus.NOT_FOUND);

    UserCredential userCredential = userCredentialData.get();
    creditCard.setUserCredential(userCredential);
    userCredential.getCreditCardDetails().add(creditCard);
    creditCardRepository.save(creditCard);
    userCredentialRepository.save(userCredential);
    return new ResponseEntity(HttpStatus.CREATED);
  }

  @PostMapping(path = "/user/{userId}/addShipmentDetail", consumes = "application/json")
  public ResponseEntity addShipmentDetail(@PathVariable String userId, @RequestBody ShipmentDetails shipmentDetails) {
    Optional<UserCredential> userData = userCredentialRepository.findById(userId);
    if (!userData.isPresent())
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    UserCredential user = userData.get();
    shipmentDetails.setUserCredential(user);
    shipmentDetailsRepository.save(shipmentDetails);
    return new ResponseEntity(HttpStatus.CREATED);
  }

  @PostMapping(path = "/user/{userId}/addOrder", consumes = "application/json")
  public ResponseEntity createOrder(@PathVariable String userId,
                                 @RequestBody ShoppingCart shoppingCart,
                                 @RequestParam Long creditCardId,
                                 @RequestParam Long shippingId) {
    Optional<UserCredential> userData = userCredentialRepository.findById(userId);
    Optional<CreditCardDetail> creditCardData = creditCardRepository.findById(creditCardId);
    Optional<ShipmentDetails> shipmentDetailsData = shipmentDetailsRepository.findById(shippingId);
    if (!userData.isPresent() || !creditCardData.isPresent() || !shipmentDetailsData.isPresent()) {
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    UserCredential user = userData.get();
    CreditCardDetail creditCard = creditCardData.get();
    ShipmentDetails shipmentDetails = shipmentDetailsData.get();

    for (ShoppingCartItem item : shoppingCart.getShoppingCartItems()) {
      item.setShoppingCart(shoppingCart);
    }
    Order order = new Order(shoppingCart, shipmentDetails, creditCard);
    shipmentDetails.setOrder(order);
    creditCard.getOrders().add(order);
    order.setUserCredential(user);
    user.getOrders().add(order);
    orderRepository.save(order);
    return new ResponseEntity(HttpStatus.CREATED);
  }
}
