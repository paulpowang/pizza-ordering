package com.pizza.repositories;

import org.springframework.data.repository.CrudRepository;

import com.pizza.models.CreditCardDetail;



public interface CreditCardRepository extends CrudRepository<CreditCardDetail, Long> {

}
