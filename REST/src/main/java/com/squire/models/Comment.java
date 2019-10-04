package com.squire.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

public class Comment {
	
	@Id
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "u_id")
	private User user;
	
	@Column(name = "text")
	private String text;
	
	@OneToMany
	@JoinColumn(name = "n_id")
	private Note note;
	
	@Column(name = "doc")
	private Date doc;

	public Comment() {
		
		super();
		
	}

	public Comment(int id, User user, String text, Note note, Date doc) {
		
		super();
		
		this.id = id;
		this.user = user;
		this.text = text;
		this.note = note;
		this.doc = doc;
		
	}

	public int getId() {
		
		return id;
		
	}

	public void setId(int id) {
		
		this.id = id;
		
	}

	public User getUser() {
		
		return user;
		
	}

	public void setUser(User user) {
		
		this.user = user;
		
	}

	public String getText() {
		
		return text;
		
	}

	public void setText(String text) {
		
		this.text = text;
		
	}

	public Note getNote() {
		
		return note;
		
	}

	public void setNote(Note note) {
		
		this.note = note;
		
	}

	public Date getDoc() {
		
		return doc;
		
	}

	public void setDoc(Date doc) {
		
		this.doc = doc;
		
	}

	@Override
	public String toString() {
		
		return "Comment [id=" + id + ", user=" + user + ", text=" + text + ", note=" + note + ", doc=" + doc + "]";
		
	}

}
