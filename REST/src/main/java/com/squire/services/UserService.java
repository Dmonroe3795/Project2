package com.squire.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squire.models.User;
import com.squire.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository ur;
	
	
	public User createUser(User u) {
		return ur.save(u);
	}
	public User getUserByUsername(String username) {
		return ur.findByUsername(username);
	}
	public User getUserByUsernameAndPass(String username, String pass) {
		return ur.findByUsernameAndPass(username, pass);
	}
	public User getUser(int id) {
		return ur.findById(id).get();
	}
	public void deleteUser(User u) {
		ur.delete(u);
	}

}	
