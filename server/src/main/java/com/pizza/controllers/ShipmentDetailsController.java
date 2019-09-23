package com.pizza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.pizza.models.ShipmentDetails;
import com.pizza.service.ShipmentDetailsService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ShipmentDetailsController {

	@Autowired
	private ShipmentDetailsService service;
	
	
	// Get
	@RequestMapping(value="/shipments", method = RequestMethod.GET)
	public List<ShipmentDetails> getshipments(){
		return service.getAllTheShipmentDetails();
	}
	
	@RequestMapping(value="/shipments/{id}")
	public ShipmentDetails getShipmentDetailsById(@PathVariable int id) {
		return service.getShipmentDetails(id);
	}
	
	//POST
	@RequestMapping(value="/shipments/save", method = RequestMethod.POST)
	public void saveShipmentDetails(@RequestBody ShipmentDetails ship) {
		service.saveShipmentDetails(ship);;
	}
	
	//PUT
	@RequestMapping(value="/shipments/update/{id}", method = RequestMethod.PUT)
	public void updateShipmentDetails(@PathVariable long id, @RequestBody ShipmentDetails ship) {
		service.updateShipmentDetails(id, ship);;
	}
	
	//Delete
	@RequestMapping(value="/shipments/delete/{id}", method = RequestMethod.DELETE)
	public void deleteShipmentDetails(@PathVariable int id) {
		service.deleteShipmentDetails(id);
	}
}
