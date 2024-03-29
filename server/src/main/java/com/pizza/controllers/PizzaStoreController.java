package com.pizza.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.pizza.models.FoodItem;
import com.pizza.repositories.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pizza.models.PizzaStore;
import com.pizza.repositories.PizzaStoreRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PizzaStoreController
{
	@Autowired
	PizzaStoreRepository repository;

	@Autowired
  FoodItemRepository foodItemRepository;

	@GetMapping("/stores")
	public ResponseEntity<List<PizzaStore>> getAllStores() {
		List<PizzaStore> stores = new ArrayList<>();
		try {
			repository.findAll().forEach(stores::add);

			if (stores.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(stores, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/stores/{id}")
	public ResponseEntity<PizzaStore> getStoreById(@PathVariable("id") long id) {
		Optional<PizzaStore> storeData = repository.findById(id);

		if (storeData.isPresent()) {
			return new ResponseEntity<>(storeData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/stores")
	public ResponseEntity<PizzaStore> postStore(@RequestBody PizzaStore pizzaStore) {
		try {
			PizzaStore _store = repository.save(new PizzaStore(pizzaStore.getStoreName(),
																	pizzaStore.getCity(),
																	pizzaStore.getState(),
																	pizzaStore.getZipCode(),
																	pizzaStore.getFoodItems()));
			return new ResponseEntity<>(_store, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@DeleteMapping("/stores/{id}")
	public ResponseEntity<HttpStatus> deleteStore(@PathVariable("id") long id) {
		try {
			repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@DeleteMapping("/stores")
	public ResponseEntity<HttpStatus> deleteAllStores() {
		try {
			repository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}

	}

	@GetMapping(value = "stores/zipcode/{zipCode}")
	public ResponseEntity<List<PizzaStore>> findByZipCode(@PathVariable String zipCode) {
		try {
			List<PizzaStore> stores = repository.findByZipCode(zipCode);

			if (stores.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(stores, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping("/stores/{id}")
	public ResponseEntity<PizzaStore> updateStore(@PathVariable("id") long id, @RequestBody PizzaStore pizzaStore) {
		Optional<PizzaStore> storeData = repository.findById(id);

		if (storeData.isPresent()) {
			PizzaStore _store = storeData.get();
			_store.setStoreName(pizzaStore.getStoreName());
			_store.setCity(pizzaStore.getCity());
			_store.setState(pizzaStore.getState());
			_store.setZipCode(pizzaStore.getZipCode());
			_store.setFoodItems(pizzaStore.getFoodItems());
			return new ResponseEntity<>(repository.save(_store), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/stores/addFoodItem/{storeId}")
  public ResponseEntity addFoodItemToStore(@PathVariable Long storeId, @RequestBody FoodItem foodItem) {
	  System.out.println(foodItem.toString());

	  Optional<PizzaStore> pizzaStoreData = repository.findById(storeId);
	  if (!pizzaStoreData.isPresent())
	    return new ResponseEntity(HttpStatus.NOT_FOUND);

	  PizzaStore pizzaStore = pizzaStoreData.get();
	  foodItem.getPizzaStores().add(pizzaStore);
	  pizzaStore.getFoodItems().add(foodItem);
	  foodItemRepository.save(foodItem);
	  repository.save(pizzaStore);
	  return new ResponseEntity(HttpStatus.CREATED);
  }
}
