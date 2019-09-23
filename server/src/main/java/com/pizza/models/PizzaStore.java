package com.pizza.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Database entity for PizzaStores. Has many-to-many relationship with
 * FoodItems, joined by the table PizzaStores_has_FoodItems.
 */
@Entity
@Table(name = "PizzaStores")
public class PizzaStore 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "storeID")
	private Long storeId;

	@Column(name = "storeName")
	private String storeName;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String state;

	@Column(name = "zipCode")
	private String zipCode;

	@ManyToMany(fetch = FetchType.LAZY,
			cascade = {
					CascadeType.PERSIST,
	})
	@JoinTable(name = "PizzaStores_has_FoodItems",
	joinColumns = { @JoinColumn(name = "PizzaStoreID") },
	inverseJoinColumns = { @JoinColumn(name = "FoodItemID") })
	private Set<FoodItem> foodItems = new HashSet<>();

	public PizzaStore() {
		super();
	}

	public PizzaStore(String storeName, String city, String state, String zipCode, Set<FoodItem> foodItems) 
	{
		super();
		this.storeName = storeName;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
		this.foodItems = foodItems;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public Long getStoreID() {
		return storeId;
	}

	public void setStoreID(Long storeID) {
		storeId = storeID;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Long getStoreId() {
		return storeId;
	}

	public void setStoreId(Long storeId) {
		this.storeId = storeId;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public Set<FoodItem> getFoodItems() {
		return foodItems;
	}

	public void setFoodItems(Set<FoodItem> foodItems) {
		this.foodItems = foodItems;
	}

	@Override
	public String toString() {
		return "PizzaStore [storeId=" + storeId + ", storeName=" + storeName + ", city=" + city + ", state=" + state
				+ ", zipCode=" + zipCode + ", foodItems=" + foodItems + "]";
	}
}
