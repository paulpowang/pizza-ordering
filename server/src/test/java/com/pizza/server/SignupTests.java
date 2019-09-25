package com.pizza.server;

import org.junit.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import static org.junit.Assert.*;

public class SignupTests {

  //test connection
  @Test
  public void Test1() {
    try {
      URL myURL = new URL("http://localhost/8080/api/signup");
      URLConnection myURLConnection = myURL.openConnection();
      myURLConnection.connect();
    }
    catch (MalformedURLException e) {
      // new URL() failed
      //Log.error(e);

    }
    catch (IOException e) {
      // openConnection() failed
      //Log.error(e);
    }
  }

  //test check for userid existence in database
  @Test
  public void Test2() {
    try {
      URL myURL = new URL("http://localhost:8080/api/signup/user1@gmail.com");
      URLConnection myURLConnection = myURL.openConnection();
      myURLConnection.connect();
      BufferedReader br = new BufferedReader(new InputStreamReader((myURLConnection.getInputStream())));
      String result = br.readLine();
      assertEquals("true", result);

    }
    catch (MalformedURLException e) {
      // new URL() failed
    }
    catch (IOException e) {
      // openConnection() failed
    }
  }

  //test get false for userid not in database
  @Test
  public void Test3() {
    try {
      URL myURL = new URL("http://localhost:8080/api/signup/u1@gmail.com");
      URLConnection myURLConnection = myURL.openConnection();
      myURLConnection.connect();
      BufferedReader br = new BufferedReader(new InputStreamReader((myURLConnection.getInputStream())));
      String result = br.readLine();
      assertEquals("false", result);

    }
    catch (MalformedURLException e) {
      // new URL() failed

    }
    catch (IOException e) {
      // openConnection() failed
    }

  }

  @Test
  public void Test4() {
    try {
      URL myURL = new URL("http://localhost:8080/api/signup");
      URLConnection myURLConnection = myURL.openConnection();
      myURLConnection.connect();
      BufferedReader br = new BufferedReader(new InputStreamReader((myURLConnection.getInputStream())));
      int result = br.read();
      assertEquals(91, result);

    }
    catch (MalformedURLException e) {
      // new URL() failed

    }
    catch (IOException e) {
      // openConnection() failed
    }
  }

  @Test
  public void Test5() {
    try {
      URL myURL = new URL("http://localhost:8080/api/signup");
      URLConnection myURLConnection = myURL.openConnection();
      myURLConnection.connect();
      BufferedReader br = new BufferedReader(new InputStreamReader((myURLConnection.getInputStream())));
      String result = br.readLine();
      assertEquals("[{\"userCredentialId\":\"user1@gmail.com\",\"userType\":\"customer\",\"password\":\"123\",\"loginStatus\":null,\"orders\":[],\"creditCardDetails\":[],\"shipmentDetails\":[]}]", result);

    }
    catch (MalformedURLException e) {
      // new URL() failed

    }
    catch (IOException e) {
      // openConnection() failed
    }
  }


}


