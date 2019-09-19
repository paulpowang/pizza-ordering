package com.pizza.controllers;

import com.pizza.models.FoodItem;
import com.pizza.repositories.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/foodItems")
public class FoodItemController {

  @Autowired
  private FoodItemRepository repository;

  @GetMapping(path = "/all", produces = "application/json")
  public @ResponseBody Iterable getAllFoodItems() {
    return repository.findAll();
  }


  @PostMapping(path = "/add", produces = "application/text")
  public @ResponseBody String addFoodItem(@RequestBody FoodItem foodItem) {
    repository.save(foodItem);
    return "Item saved successfully";
  }
}
