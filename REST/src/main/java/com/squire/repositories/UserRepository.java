package com.squire.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.squire.models.Role;
import com.squire.models.User;

@Repository
public interface UserRepository  extends CrudRepository<User, Integer>{
	
	User findByFirstnameAndLastname(String firstname, String lastname);
	User findByUsername(String username);
	User findByUsernameAndPass(String username, String pass);
	List<User> findByRole(Role role);

}
