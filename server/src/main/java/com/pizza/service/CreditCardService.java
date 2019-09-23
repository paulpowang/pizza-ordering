package com.pizza.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizza.repositories.CreditCardRepository;
import com.pizza.models.CreditCardDetail;

@Service
public class CreditCardService {
	
	@Autowired
	private CreditCardRepository repository;
	
	// return all credit card
	public List<CreditCardDetail> getAllTheCreditCards(){
		List<CreditCardDetail> list = new ArrayList<>();
		repository.findAll().forEach(list::add);
		return list;
	}
	
	
	// return credit card by id
	public CreditCardDetail getCreditCardDetail(long id) {
		Optional<CreditCardDetail> optionalCreditCard = repository.findById(id);
		
		if(optionalCreditCard.isPresent()) {
			return optionalCreditCard.get();
		}
		return null;
		
		
	}
	
	
	// save the credit card
	public void saveCreditCardDetail(CreditCardDetail card) {
		repository.save(card);
	}
	
	// update the credit card
	public void updateCreditCardDetail(long id,CreditCardDetail card) {
		Optional<CreditCardDetail> optionalCard =  repository.findById(id);
		CreditCardDetail card1 = optionalCard.get();
		card1.setCreditCardNumber(card.getCreditCardNumber());
		card1.setCardHolderName(card.getCardHolderName());
		card1.setValidTo(card.getValidTo());
		card1.setBalance(card.getBalance());
		repository.save(card1);
	}
	
	// remove the credit card by id
	public void deleteCreditCardDetail(long id) {
		repository.deleteById(id);;
	}
	

}
