package com.pizza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pizza.models.CreditCardDetail;



public interface CreditCardRepository extends CrudRepository<CreditCardDetail, Long> {
	List<CreditCardDetail> findByCreditCardNumber(String creditCardNumber);

}
