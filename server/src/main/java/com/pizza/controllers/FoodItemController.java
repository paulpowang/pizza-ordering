package com.pizza.controllers;

import com.pizza.models.FoodItem;
import com.pizza.repositories.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/foodItems")
public class FoodItemController {

  @Autowired
  private FoodItemRepository repository;

  @GetMapping(path = "/all", produces = "application/json")
  public @ResponseBody Iterable getAllFoodItems() {
    return repository.findAll();
  }

  @PostMapping(path = "/add", produces = "application/text")
  public ResponseEntity<FoodItem> addFoodItem(@RequestBody FoodItem foodItem) {
    try {
      repository.save(foodItem);
      return new ResponseEntity<FoodItem>(foodItem, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @GetMapping(path = "/byStoreID/{id}", produces = "application/json")
  public @ResponseBody Iterable getFoodItemById(@PathVariable Long id) {
    return repository.findByPizzaStores_StoreId(id);
  }
}
