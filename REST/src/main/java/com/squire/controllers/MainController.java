package com.squire.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public boolean testMethod() {
		return false;
	}

}
