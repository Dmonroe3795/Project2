package com.squire.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "courses")
public class Course {
	
	@Id
	private int id;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="courses_notes_jt", 
				joinColumns= @JoinColumn(name="c_id"),
				inverseJoinColumns= @JoinColumn(name="n_id"))
	private List<Note> notes;
	
	@ManyToOne
	@JoinColumn(name = "u_id")
	private User trainer;
	
	@Column(name = "name")
	private String name;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="courses_users_jt", 
				joinColumns= @JoinColumn(name="c_id"),
				inverseJoinColumns= @JoinColumn(name="u_id"))
	private List<User> users;

	public Course() {
		
		super();
		
	}

	public Course(int id, List<Note> notes, User trainer, String name, List<User> users) {
		
		super();
		
		this.id = id;
		this.notes = notes;
		this.trainer = trainer;
		this.name = name;
		this.users = users;
		
	}

	public int getId() {
		
		return id;
		
	}

	public void setId(int id) {
		
		this.id = id;
		
	}

	public List<Note> getNotes() {
		
		return notes;
		
	}

	public void setNotes(List<Note> notes) {
		
		this.notes = notes;
		
	}

	public User getTrainer() {
		
		return trainer;
		
	}

	public void setTrainer(User trainer) {
		
		this.trainer = trainer;
		
	}

	public String getName() {
		
		return name;
		
	}

	public void setName(String name) {
		
		this.name = name;
		
	}

	public List<User> getUsers() {
		
		return users;
		
	}

	public void setUsers(List<User> users) {
		
		this.users = users;
		
	}

	@Override
	public String toString() {
		
		return "Course [id=" + id + ", notes=" + notes + ", name=" + name + "]";
		
	}

}
