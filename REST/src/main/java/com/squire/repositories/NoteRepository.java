package com.squire.repositories;

import org.springframework.data.repository.CrudRepository;

import com.squire.models.Note;

public interface NoteRepository extends CrudRepository<Note, Integer> {

}
