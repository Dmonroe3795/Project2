package com.squire.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "notes")
public class Note {
	
	@Id
	private int id;
	
	@ManyToMany(mappedBy = "notes")
	private List<Course> courses;
	
	@Column(name = "text")
	private String text;
	
	@Column(name = "visible")
	private boolean visible;
	
	@ManyToOne
	@JoinColumn(name = "u_id")
	private User trainer;
	
	public Note() {
		
		super();
		
	}

	public Note(int id, String text, boolean visible, User trainer) {
		
		super();
		
		this.id = id;
		this.text = text;
		this.visible = visible;
		this.trainer = trainer;
		
	}

	public int getN_id() {
		
		return id;
		
	}

	public void setN_id(int id) {
		
		this.id = id;
		
	}

	public String getText() {
		
		return text;
		
	}

	public void setText(String text) {
		
		this.text = text;
		
	}

	public boolean isVisible() {
		
		return visible;
		
	}

	public void setVisible(boolean visible) {
		
		this.visible = visible;
		
	}

	public User getTrainer() {
		
		return trainer;
		
	}

	public void setTrainer(User trainer) {
		
		this.trainer = trainer;
		
	}

	@Override
	public String toString() {
		
		return "Note [id=" + id + ", text=" + text + ", visible=" + visible + "]";
		
	}

}
