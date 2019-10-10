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
	
	@RequestMapping(value = "/courses", method = RequestMethod.GET)
	public List<Course> getAllCourses() {
		
		return cs.getAllCourses();
		
	}
	
	@RequestMapping(value = "/courses/{id}", method = RequestMethod.GET)
	public Course getCourseById(@PathVariable("id") int id) {
		return cs.getCourse(id);
		
	}
	
	@RequestMapping(value = "/courses", method = RequestMethod.POST, consumes = "application/json")
	public Course createCourse(@RequestBody Course course) {
		System.out.println(course.toString() + " course1test");
		
		return cs.createCourse(course);		
	}
	
	@RequestMapping(value = "/courses", method = RequestMethod.PUT, consumes = "application/json")
	public Course updateCourse(@RequestBody Course course) {
		
//		return cs.updateCourse(course);
		return null;
		
	}
	
	@RequestMapping(value = "/courses/{id}", method = RequestMethod.DELETE) 
	public void deleteCourseById(@PathVariable("id") int id) {
		
//		cs.deleteCourse(cs.getCourseById(id));
		
	}
	
	@RequestMapping(value = "/courses/users/{id}", method = RequestMethod.GET)
	public List<Course> getUserCourses(@PathVariable("id") int id) {
		return cs.getAllCoursesOfUser(id);
	}

}
