package com.squire.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.Course;
import com.squire.models.Role;
import com.squire.models.User;
import com.squire.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService us;

	@RequestMapping(value = "/user/login", method = RequestMethod.POST, consumes = "application/json")
	public User getUserLogin(@RequestBody String username, @RequestBody String pass) {
		return us.getUserByUsernameAndPass(username, pass);	
	}
	
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public User getUserById(@PathVariable("id") int id) {
		return us.getUser(id);
	}
	
	@RequestMapping(value = "/user/username/{username}", method = RequestMethod.GET)
	public User getUserByUsername(@PathVariable("username") String username) {
		return us.getUserByUsername(username);
	}
	
	@RequestMapping(value = "/user/role/{id}", method = RequestMethod.GET)
	public Role getUserRole(@PathVariable("id") int id) {
		return us.getUser(id).getR_id();
	}
	
	@RequestMapping(value = "/users/role/{id}", method = RequestMethod.POST)
	public List<User> getUsersByRole(@PathVariable("id") int id) {
		return us.getUsersByRole(id);
	}
	
	@RequestMapping(value = "/user", method = RequestMethod.POST, consumes = "application/json")
	public User createUser(@RequestBody User user) {
		return us.createUser(user);
	}
	
	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") int id) {
		us.deleteUser(us.getUser(id));
	}
	
	
	
}
