package com.squire.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "notes")
public class Note {
	
	@Id
	@Column(name="id")
	@SequenceGenerator(sequenceName="note_id_maker", name="n_id_seq", initialValue=1, allocationSize=1)
	@GeneratedValue(generator="n_id_seq", strategy=GenerationType.SEQUENCE)
	private int id;
	
	@ManyToMany(mappedBy = "notes")
	private List<Course> courses;
	
	@Column(name = "filename")
	private String filename;
	
	@Column(name = "visible")
	private boolean visible;
	
	@ManyToOne
	@JoinColumn(name = "u_id")
	private User trainer;
	
	public Note() {
		
		super();
		
	}

	public Note(int id, String filename, boolean visible, User trainer) {
		
		super();
		
		this.id = id;
		this.filename = filename;
		this.visible = visible;
		this.trainer = trainer;
		
	}

	public int getN_id() {
		
		return id;
		
	}

	public void setN_id(int id) {
		
		this.id = id;
		
	}

	public String getFilename() {
		
		return filename;
		
	}

	public void setFilename(String filename) {
		
		this.filename = filename;
		
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
		
		return "Note [id=" + id + ", filename=" + filename + ", visible=" + visible + "]";
		
	}

}
