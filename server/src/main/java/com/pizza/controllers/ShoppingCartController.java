package com.pizza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.*;

import com.pizza.models.ShoppingCart;
import com.pizza.service.ShoppingCartService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ShoppingCartController {
	
	@Autowired
	private ShoppingCartService service;
	
	
	// Get
	@RequestMapping(value="/shoppingcarts", method = RequestMethod.GET)
	public List<ShoppingCart> getShoppingCarts(){
		return service.getAllTheShoppingCarts();
	}
	
	@RequestMapping(value="/shoppingcarts/{id}")
	public ShoppingCart getShoppingCartById(@PathVariable int id) {
		return service.getShoppingCartDetail(id);
	}
	
	//POST
	@RequestMapping(value="/shoppingcarts/save", method = RequestMethod.POST)
	public void saveShoppingCartDetail(@RequestBody ShoppingCart card) {
		service.saveShoppingCartDetail(card);;
	}
	
	//PUT
	@RequestMapping(value="/shoppingcarts/update/{id}", method = RequestMethod.PUT)
	public void updateShoppingCartDetail(@PathVariable long id, @RequestBody ShoppingCart card) {
		service.updateShoppingCartDetail(id, card);;
	}
	
	//Delete
	@RequestMapping(value="/shoppingcarts/delete/{id}", method = RequestMethod.DELETE)
	public void deleteShoppingCartDetail(@PathVariable int id) {
		service.deleteShoppingCartDetail(id);
	}

}
