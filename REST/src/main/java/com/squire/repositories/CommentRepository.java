package com.squire.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.squire.models.Comment;
import com.squire.models.Note;
import com.squire.models.User;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer>{
	
	Note findByNote(Note note);
	User findByUser(User user);

}
