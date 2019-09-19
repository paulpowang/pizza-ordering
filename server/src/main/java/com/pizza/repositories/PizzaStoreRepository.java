package com.pizza.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.pizza.models.PizzaStore;

public interface PizzaStoreRepository extends CrudRepository<PizzaStore, Long> 
{
	List<PizzaStore> findByZipCode(String zipCode);
}
