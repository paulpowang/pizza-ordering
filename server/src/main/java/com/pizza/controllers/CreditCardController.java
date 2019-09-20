package com.pizza.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.models.CreditCardDetail;
import com.pizza.repositories.CreditCardRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class CreditCardController {

	
	@Autowired
	CreditCardRepository repository;
	
	@GetMapping("/creditcards")
	  public ResponseEntity<List<CreditCardDetail>> getAllCreditCards() {
	    List<CreditCardDetail> creditcards = new ArrayList<>();
	    try {
	      repository.findAll().forEach(creditcards::add);
	      
	      if (creditcards.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }
	      return new ResponseEntity<>(creditcards, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	
	@PostMapping(value = "/checkout/creditcard")
	  public ResponseEntity<CreditCardDetail> postCreditCardDetail(@RequestBody CreditCardDetail creditcard) {
	    try {
	    	CreditCardDetail _creditcard = repository.save(creditcard);
	      return new ResponseEntity<>(_creditcard, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
	    }
	  }
	
}

