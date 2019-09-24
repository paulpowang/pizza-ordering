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

  @GetMapping(path = "/user/{userId}/getCreditCards")
  public ResponseEntity<List<CreditCardDetail>> getCreditCardsForUser(@PathVariable String userId) {
    Optional<UserCredential> userCredentialData = userCredentialRepository.findById(userId);
    return userCredentialData
      .map(userCredential -> new ResponseEntity<>(userCredential.getCreditCardDetails(), HttpStatus.OK))
      .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
  }

  /**
   * Gets a list of all shipmentDetails for the user with userId
   * @param userId Email of the user
   * @return A list of ShipmentDetails associated with this user
   */
  @GetMapping(path = "/user/{userId}/getShipmentDetails")
  public ResponseEntity<List<ShipmentDetails>> getShipmentDetailsForUser(@PathVariable String userId) {
    Optional<UserCredential> userCredentialData = userCredentialRepository.findById(userId);
    return userCredentialData
      .map(userCredential -> new ResponseEntity<>(userCredential.getShipmentDetails(), HttpStatus.OK))
      .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
  }

  /**
   * Adds a credit
   * @param userId
   * @param creditCard
   * @return
   */
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

    Order order = new Order(shoppingCart, shipmentDetails, creditCard, user);

    for (ShoppingCartItem item : shoppingCart.getShoppingCartItems()) {
      item.setShoppingCart(shoppingCart); // shoppingCartItem -> shoppingCart
    }
    shipmentDetails.getOrders().add(order); // shipmentDetails -> order
    creditCard.getOrders().add(order); // creditCard -> [order]
    user.getOrders().add(order); // user -> order

    shipmentDetailsRepository.save(shipmentDetails);
    creditCardRepository.save(creditCard);
    userCredentialRepository.save(user);
    orderRepository.save(order);
    return new ResponseEntity(HttpStatus.CREATED);
  }
}
