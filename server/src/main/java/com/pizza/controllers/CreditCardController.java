package com.pizza.controllers;

import java.util.List;

import com.pizza.repositories.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pizza.models.CreditCardDetail;
import com.pizza.service.CreditCardService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CreditCardController {

	@Autowired
	private CreditCardService service;

	@Autowired
  private UserCredentialRepository userCredentialRepository;

	// Get
	@RequestMapping(value="/creditcards", method = RequestMethod.GET)
	public List<CreditCardDetail> getCreditCards(){
		return service.getAllTheCreditCards();
	}

	@RequestMapping(value="/creditcards/{id}")
	public CreditCardDetail getCreditCardById(@PathVariable int id) {
		return service.getCreditCardDetail(id);
	}

	//POST
	@RequestMapping(value="/creditcards/save", method = RequestMethod.POST)
	public void saveCreditCardDetail(@RequestBody CreditCardDetail card) {
		service.saveCreditCardDetail(card);;
	}

	//PUT
	@RequestMapping(value="/creditcards/update/{id}", method = RequestMethod.PUT)
	public void updateCreditCardDetail(@PathVariable long id, @RequestBody CreditCardDetail card) {
		service.updateCreditCardDetail(id, card);;
	}

	//Delete
	@RequestMapping(value="/creditcards/delete/{id}", method = RequestMethod.DELETE)
	public void deleteCreditCardDetail(@PathVariable int id) {
		service.deleteCreditCardDetail(id);
	}

	@PostMapping(value = "/creditcards/addForUser/{userId}")
  public ResponseEntity addCreditCardFor(@PathVariable String userId, @RequestBody CreditCardDetail creditCard) {

  }

}

