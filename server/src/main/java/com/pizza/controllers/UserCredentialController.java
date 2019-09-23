package com.pizza.controllers;
import com.pizza.models.PizzaStore;
import com.pizza.models.UserCredential;
import com.pizza.repositories.UserCredentialRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserCredentialController {

  @Autowired
  UserCredentialRepository repository;

  @GetMapping("/signup")
  public ResponseEntity<List<UserCredential>> getAllStores() {
    List<UserCredential> users = new ArrayList<>();
    try {
      repository.findAll().forEach(users::add);

      if (users.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  /*
  @GetMapping("/signup/{id}")
  public boolean getById(@PathVariable(value = "id") String UserId) {
    return (userCredentialRepository.existsById(UserId));
  }
  */


  /*
    @GetMapping("/signup/{id}")
  public ResponseEntity<UserCredential> getStoreById(@PathVariable("id") String userid) {
    Optional<UserCredential> storeData = repository.findById(userid);
    boolean found = storeData.isPresent();


    if (storeData.isPresent()) {
      return new ResponseEntity<>(storeData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
   */

  @GetMapping("/signup/{id}")
  public boolean getStoreById(@PathVariable("id") String userCredentialId) {
    Optional<UserCredential> storeData = repository.findById(userCredentialId);
    boolean found = storeData.isPresent();
    System.out.println(found);
    return found;

  }
/*
  @RequestMapping("/signup/add")
  public String addNewUser (@RequestParam String userid
    , @RequestParam String password, String usertype, Date date) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    UserCredential s = new UserCredential();


    s.setUserCredentialId(userid);
    s.setLoginStatus(date);
    s.setPassword(password);
    s.setUserType(usertype);
    repository.save(s);
    return "Saved";
  }
*/

  @PostMapping(value = "/signup")

  public ResponseEntity<UserCredential> postUser(@RequestBody UserCredential usercredential) {
    try {
      UserCredential users= repository.save(new UserCredential(usercredential.getUserCredentialId(),
        usercredential.getUserType(),
        usercredential.getPassword()));
      return new ResponseEntity<>(users, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

}
