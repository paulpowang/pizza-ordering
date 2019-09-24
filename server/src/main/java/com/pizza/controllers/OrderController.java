package com.pizza.controllers;

import com.pizza.models.Order;
import com.pizza.models.ShoppingCartItem;
import com.pizza.models.UserCredential;
import com.pizza.repositories.OrderRepository;
import com.pizza.repositories.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

  @Autowired
  OrderRepository orderRepository;

  @Autowired
  UserCredentialRepository userCredentialRepository;

  @PostMapping(path = "/add")
  public ResponseEntity createOrder(@RequestBody @Valid Order order, @RequestParam String userId) {
    Optional<UserCredential> userCredentialData = userCredentialRepository.findById(userId);
    if (!userCredentialData.isPresent())
      return new ResponseEntity(HttpStatus.NOT_FOUND);

    // Create relationship between shoppingCartItem and shoppingCart
    List<ShoppingCartItem> shoppingCartItems = order.getShoppingCart().getShoppingCartItems();
    for (ShoppingCartItem item : shoppingCartItems) {
      item.setShoppingCart(order.getShoppingCart());
    }
    // Create relationship between ShoppingCart and order
    order.getShoppingCart().setOrder(order);
    UserCredential userCredential = userCredentialData.get();
    userCredential.getOrders().add(order);
    userCredentialRepository.save(userCredential);
    return new ResponseEntity(HttpStatus.CREATED);
  }

}
