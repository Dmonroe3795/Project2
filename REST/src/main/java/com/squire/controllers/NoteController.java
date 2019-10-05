package com.squire.controllers;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.squire.models.Note;
import com.squire.services.NoteService;

@RestController
public class NoteController {

	@Autowired
	NoteService ns;

	@RequestMapping(value = "/note", method = RequestMethod.POST, consumes = "application/json")
	public Note createNote(@RequestBody Note note) {
		return ns.createNote(note);
	}
	
//	@RequestMapping(value = "/notes/course/{id}", method = RequestMethod.GET)
//	public List<Note> getNotesByCourse(@PathVariable int id) {
//		return ns.getNotesByCourse(id);
//	}
	
	@RequestMapping(value = "/note/{id}", method = RequestMethod.GET)
	public Note getNotesById(@PathVariable int id) {
		return ns.getNote(id);
	}
	
	@RequestMapping(value = "/note/{id}", method = RequestMethod.DELETE)
	public void deleteNote(@PathVariable int id) {
		ns.deleteNote(ns.getNote(id));
	}
	
}
