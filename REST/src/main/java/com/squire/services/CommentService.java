package com.squire.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.squire.models.Comment;
import com.squire.repositories.CommentRepository;

public class CommentService {
	@Autowired
	CommentRepository cr;
	
	public Comment createComment(Comment c) {
		return cr.save(c);
	}
	public Comment getComment(int id) {
		return cr.findById(id).get();
	}
	public void deleteComment(Comment c) {
		cr.delete(c);
	}
}
