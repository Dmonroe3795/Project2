
package com.squire.repositories;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.squire.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	User findByFirstnameAndLastname(String firstname, String lastname);
	User findByUsername(String username);
	User findByUsernameAndPass(String username, String pass);
	Set<User> findByIsInstructor(boolean b);

}
