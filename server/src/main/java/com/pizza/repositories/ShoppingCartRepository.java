package com.pizza.repositories;

import org.springframework.data.repository.CrudRepository;

import com.pizza.models.ShoppingCart;

public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long>{

}
