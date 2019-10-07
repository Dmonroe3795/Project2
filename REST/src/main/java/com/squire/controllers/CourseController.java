package com.squire.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.Course;
import com.squire.services.CourseService;

@RestController
@CrossOrigin
public class CourseController {
	
	@Autowired
	CourseService cs;
	
	@RequestMapping(value = "/course", method = RequestMethod.GET)
	public List<Course> getAllCourses() {
		
		return cs.getAllCourses();
		
	}
	
	@RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
	public Course getCourseById(@PathVariable("id") int id) {
		
		return cs.getCourse(id);
		
	}
	
	@RequestMapping(value = "/course", method = RequestMethod.POST, consumes = "application/json")
	public Course createCourse(@RequestBody Course course) {
		
//		return cs.createCourse(course);
		return null;
		
	}
	
	@RequestMapping(value = "/course", method = RequestMethod.PUT, consumes = "application/json")
	public Course updateCourse(@RequestBody Course course) {
		
//		return cs.updateCourse(course);
		return null;
		
	}
	
	@RequestMapping(value = "/course/{id}", method = RequestMethod.DELETE) 
	public void deleteCourseById(@PathVariable("id") int id) {
		
//		cs.deleteCourse(cs.getCourseById(id));
		
	}
	
	@RequestMapping(value = "/course/user/{id}", method = RequestMethod.GET)
	public List<Course> getUserCourses(@PathVariable("id") int id) {
		return cs.getAllCoursesOfUser(id);
	}

}
