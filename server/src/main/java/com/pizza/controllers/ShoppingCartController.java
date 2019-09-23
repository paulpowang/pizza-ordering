package com.pizza.controllers;

import java.util.List;
import java.util.Optional;

import com.pizza.models.FoodItem;
import com.pizza.models.ShoppingCartItem;
import com.pizza.repositories.FoodItemRepository;
import com.pizza.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.*;

import com.pizza.models.ShoppingCart;
import com.pizza.service.ShoppingCartService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/shoppingcarts")
public class ShoppingCartController {

	@Autowired
	private ShoppingCartService service;

	@Autowired
  private ShoppingCartRepository shoppingCartRepository;

	@Autowired
  private FoodItemRepository foodItemRepository;

	// Get
	@RequestMapping(value="", method = RequestMethod.GET)
	public List<ShoppingCart> getShoppingCarts(){
		return service.getAllTheShoppingCarts();
	}

	@RequestMapping(value="/{id}")
	public ShoppingCart getShoppingCartById(@PathVariable int id) {
		return service.getShoppingCartDetail(id);
	}

	//POST
	@RequestMapping(value="/save", method = RequestMethod.POST)
	public void saveShoppingCartDetail(@RequestBody ShoppingCart card) {
		service.saveShoppingCartDetail(card);;
	}

	//PUT
//	@RequestMapping(value="/shoppingcarts/update/{id}", method = RequestMethod.PUT)
//	public void updateShoppingCartDetail(@PathVariable long id, @RequestBody ShoppingCart card) {
//		service.updateShoppingCartDetail(id, card);;
//	}

	//Delete
	@RequestMapping(value="/delete/{id}", method = RequestMethod.DELETE)
	public void deleteShoppingCartDetail(@PathVariable int id) {
		service.deleteShoppingCartDetail(id);
	}

	@PutMapping(value = "/addFoodItem/{shoppingCartId}")
	public ResponseEntity addFoodItemToShoppingCart(@PathVariable Long shoppingCartId, @RequestBody FoodItem foodItem, @RequestParam Integer quantity) {
	  Optional<ShoppingCart> shoppingCartData = shoppingCartRepository.findById(shoppingCartId);
	  Optional<FoodItem> foodItemData = foodItemRepository.findById(foodItem.getFoodItemId());
	  if (!shoppingCartData.isPresent() || !foodItemData.isPresent()) {
	    return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
	  ShoppingCart shoppingCart = shoppingCartData.get();
	  shoppingCart.getShoppingCartItems().add(new ShoppingCartItem(quantity,foodItem, shoppingCart));
	  shoppingCartRepository.save(shoppingCart);
	  return new ResponseEntity(HttpStatus.CREATED);
	}

}
