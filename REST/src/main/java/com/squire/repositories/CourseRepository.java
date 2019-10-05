package com.squire.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.squire.models.Course;
import com.squire.models.Note;
import com.squire.models.User;

@Repository
public interface CourseRepository extends CrudRepository<Course, Integer>{
	
	List<Course> findByTrainer(User trainer);
	List<Course> findByName(String name);

}
