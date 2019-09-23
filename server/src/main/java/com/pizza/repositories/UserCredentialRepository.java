package com.pizza.repositories;

import com.pizza.models.UserCredential;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.repository.CrudRepository;


public interface UserCredentialRepository extends CrudRepository<UserCredential, String> {
}
