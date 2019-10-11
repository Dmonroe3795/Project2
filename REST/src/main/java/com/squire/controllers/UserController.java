package com.squire.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.User;
import com.squire.services.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserService us;

	@RequestMapping(value = "/users/login", method = RequestMethod.POST, consumes = "application/json")
	public User getUserLogin(@RequestBody User user) {
		return us.getUserByUsernameAndPass(user.getUsername(), user.getPass());	
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public User getUserById(@PathVariable("id") int id) {
		return us.getUser(id);
	}
	
	@RequestMapping(value = "/users/username/{username}", method = RequestMethod.GET)
	public User getUserByUsername(@PathVariable("username") String username) {
		return us.getUserByUsername(username);
	}
	
	@RequestMapping(value = "/users/{id}/role", method = RequestMethod.GET)
	public boolean getUserRole(@PathVariable("id") int id) {
		return us.getUser(id).getIsInstructor();
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.POST, consumes = "application/json")
	public User createUser(@RequestBody User user) {
		return us.createUser(user);
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") int id) {
		us.deleteUser(us.getUser(id));
	}
	
	@RequestMapping(value = "/users/courses/{id}/not", method = RequestMethod.GET)
	public Set<User> getUsersNotInCourse(@PathVariable("id") int id) {
		return us.getUsersNotInCourse(id);
	}
	
}
