package com.squire.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squire.models.Course;
import com.squire.models.Note;
import com.squire.models.Role;
import com.squire.models.User;
import com.squire.repositories.NoteRepository;

@Service
public class NoteService {
	@Autowired
	NoteRepository nr;
	
	public Note createNote(Note u) {
		return nr.save(u);
	}
	public List<Note> getNotesByCourse(Course c) {
		return nr.findByCourses(c);
	}
	public Note getNote(int id) {
		return nr.findById(id).get();
	}
	public void deleteNote(Note n) {
		nr.delete(n);
	}
}	