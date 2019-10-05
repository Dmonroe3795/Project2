package com.squire.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.Comment;

@RestController
public class CommentController {
	
//	@Autowired
//	CommentService cs;
	
	@RequestMapping(value = "/comments", method = RequestMethod.GET)
	public List<Comment> getAllComments() {
		
//		return cs.getAllComments();
		return null;
		
	}
	
	@RequestMapping(value = "comments/{id}", method = RequestMethod.GET)
	public Comment getCommentById(@PathVariable("id") int id) {
		
//		return cs.getCommentById(id);
		return null;
		
	}
	
	@RequestMapping(value = "/comments", method = RequestMethod.POST, consumes = "application/json")
	public Comment createComment(@RequestBody Comment comment) {
		
//		return cs.createComment(comment)
		return null;
		
	}
	
	@RequestMapping(value = "/comments", method = RequestMethod.PUT, consumes = "application/json")
	public Comment updateComment(@RequestBody Comment comment) {
		
//		return cs.updateComment(comment)
		return null;
		
	}	
	
	@RequestMapping(value = "/comments/{id}", method = RequestMethod.DELETE)
	public void deleteById(@PathVariable("id") int id) {
		
//		cs.deleteById(id);
		
	}

}
