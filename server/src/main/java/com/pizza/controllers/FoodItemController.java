package com.pizza.controllers;

import com.pizza.models.FoodItem;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FoodItemController {
  @GetMapping("/foodItems")
  public @ResponseBody FoodItem getFoodItem() {
    return new FoodItem();
  }
}
