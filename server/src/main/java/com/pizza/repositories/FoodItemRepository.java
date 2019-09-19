package com.pizza.repositories;

import com.pizza.models.FoodItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemRepository extends CrudRepository<FoodItem, Long> {

  List<FoodItem> findByPizzaStores_StoreId(Long storeId);

}




