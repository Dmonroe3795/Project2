package com.squire.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.squire.models.Course;
import com.squire.models.Note;

public interface NoteRepository extends CrudRepository<Note, Integer> {
	//TODO TEST THIS
	List<Note> findByCourses(Course c);

}
