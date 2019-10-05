package com.squire.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.Course;

@RestController
public class CourseController {
	
//	@Autowired
//	CourseService cs;
	
	@RequestMapping(value = "/course", method = RequestMethod.GET)
	public List<Course> getAllCourses() {
		
//		return cs.getAllCourses();
		return null;
		
	}
	
	@RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
	public Course getCourseById(@PathVariable("id") int id) {
		
//		return cs.getCourseById(id);
		return null;
		
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

}
