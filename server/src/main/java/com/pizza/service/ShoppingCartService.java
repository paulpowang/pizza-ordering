package com.pizza.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizza.models.ShoppingCart;
import com.pizza.repositories.ShoppingCartRepository;

@Service
public class ShoppingCartService {

	@Autowired
	private ShoppingCartRepository repository;

	// return all shoppingCart
		public List<ShoppingCart> getAllTheShoppingCarts(){
			List<ShoppingCart> list = new ArrayList<>();
			repository.findAll().forEach(list::add);
			return list;
		}


		// return shoppingCart by id
		public ShoppingCart getShoppingCartDetail(long id) {
			Optional<ShoppingCart> optionalShoppingCart = repository.findById(id);

			if(optionalShoppingCart.isPresent()) {
				return optionalShoppingCart.get();
			}
			return null;


		}


		// save the shoppingCart
		public void saveShoppingCartDetail(ShoppingCart shop) {
			repository.save(shop);
		}

		// update the shoppingCart
//		public void updateShoppingCartDetail(long id,ShoppingCart shop) {
//			Optional<ShoppingCart> optionalshop =  repository.findById(id);
//			ShoppingCart shop1 = optionalshop.get();
//      shop1.setFoodName(shop.getFoodName());
//      shop1.setUnitPrice(shop.getUnitPrice());
//      shop1.setQuantity(shop1.getQuantity());
//      shop1.setTotalPrice(shop.getTotalPrice());
//			repository.save(shop1);
//		}
//
		// remove the shoppingCart by id
		public void deleteShoppingCartDetail(long id) {
			repository.deleteById(id);;
		}




}
