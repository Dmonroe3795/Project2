package com.squire.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="id")
	@SequenceGenerator(sequenceName="user_id_maker", name="u_id_seq")
	@GeneratedValue(generator="u_id_seq", strategy=GenerationType.SEQUENCE)
	private int id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="pass")
	private String pass;
	
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@ManyToMany(mappedBy = "users")
	private List<Course> courses;
	
	
	@Column(name="isInstructor")
	private boolean isInstructor;

	public User() {
		super();
	}

	public User(int id, String username, String pass, String firstname, String lastname, List<Course> courses,
			boolean isInstructor) {
		super();
		this.id = id;
		this.username = username;
		this.pass = pass;
		this.firstname = firstname;
		this.lastname = lastname;
		this.courses = courses;
		this.isInstructor = isInstructor;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

//	public List<Course> getCourses() {
//		return courses;
//	}
//
//	public void setCourses(List<Course> courses) {
//		this.courses = courses;
//	}

	public boolean getIsInstructor() {
		return isInstructor;
	}

	public void setIsInstructor(boolean isInstructor) {
		this.isInstructor = isInstructor;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", pass=" + pass + ", firstname=" + firstname
				+ ", lastname=" + lastname + "]";
	}

}
