package com.squire.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squire.models.Course;
import com.squire.repositories.CourseRepository;

@Service
public class CourseService {
	@Autowired
	CourseRepository cr;
	@Autowired
	UserService us;
	
	public Course createCourse(Course c) {
		return cr.save(c);
	}
	
	public Course getCourse(int id) {
		return cr.findById(id).get();
	}
	
	public List<Course> getCourseByName(String name) {
		return cr.findByName(name);
	}
	public void deleteCourse(Course c) {
		cr.delete(c);
	}

	public List<Course> getAllCourses() {
		return (List<Course>) cr.findAll();
	}
	
	public List<Course> getAllCoursesOfTrainer(int id) {
		return (List<Course>) cr.findByTrainer(us.getUser(id));
	}
	
	public List<Course> getAllCoursesOfUser(int id) {
		return (List<Course>) cr.findByUsers_id(id);
	}

	public Course updateCourse(Course course) {
		return cr.save(course);
	}
	
}
