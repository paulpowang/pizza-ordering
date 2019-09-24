package com.pizza.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizza.models.ShipmentDetails;
import com.pizza.repositories.ShipmentDetailsRepository;

@Service
public class ShipmentDetailsService {
	
	@Autowired
	private ShipmentDetailsRepository repository;
	
	// return all ShipmentDetails
	public List<ShipmentDetails> getAllTheShipmentDetails(){
		List<ShipmentDetails> list =  new ArrayList<>();
		repository.findAll().forEach(list::add);
		
		return list;
		
	}
	
	// return shipment details by id
	public ShipmentDetails getShipmentDetails(long id) {
		Optional<ShipmentDetails> optionalShipmentDetails = repository.findById(id);
		
		if(optionalShipmentDetails.isPresent()) {
			return optionalShipmentDetails.get();
		}
		return null;
	}
	
	// save the ShipmentDetails
		public void saveShipmentDetails(ShipmentDetails ship) {
			repository.save(ship);
		}
		
		// update the ShipmentDetails
		public void updateShipmentDetails(long id,ShipmentDetails ship) {
			Optional<ShipmentDetails> optionalShip =  repository.findById(id);
			ShipmentDetails ship1 = optionalShip.get();
			ship1.setName(ship.getName());
			ship1.setAddress(ship.getAddress());
			ship1.setCity(ship.getCity());
			ship1.setState(ship.getState());
			ship1.setPin(ship.getPin());
			ship1.setMobileNumber(ship.getMobileNumber());
			ship1.setLandline(ship.getLandline());
			ship1.setOrderStatus(ship.getOrderStatus());
			repository.save(ship1);
		}
	
		// remove the ShipmentDetails by id
		public void deleteShipmentDetails(long id) {
			repository.deleteById(id);;
		}
	
	
	
	
	
	
	
	

}
