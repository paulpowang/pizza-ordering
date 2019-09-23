package com.pizza.repositories;

import org.springframework.data.repository.CrudRepository;

import com.pizza.models.ShipmentDetails;

public interface ShipmentDetailsRepository extends CrudRepository<ShipmentDetails, Long> {

}
