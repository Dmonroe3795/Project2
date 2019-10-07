package com.squire.controllers;

import java.io.IOException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.squire.models.StorageFileNotFoundException;
import com.squire.services.StorageService;

@RestController
@CrossOrigin
public class FileUploadController {
	
	@Autowired
	private final StorageService ss;
	
	@Autowired
	public FileUploadController(StorageService ss) {
		
		this.ss = ss;
		
	}
	
	@GetMapping("/")
	public String listUploadFiles(Model model) throws IOException {
		
		model.addAttribute("files", ss.loadAll().map(
				path -> MvcUriComponentsBuilder.fromMethodName(FileUploadController.class, "serveFile", 
						path.getFileName().toString()).build().toString()).collect(Collectors.toList()));
		
		return "uploadForm";
		
	}
	
	@GetMapping("/files/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
		
		Resource file = ss.loadAsResource(filename);
		
		return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, 
				"attachment; filename=\"" + file.getFilename() + "\"").body(file);
		
	}
	
	@PostMapping("/")
	public String handleFileUpload(@RequestParam("file") MultipartFile file, 
			RedirectAttributes redirectAttributes) {
		
		ss.store(file);
		redirectAttributes.addFlashAttribute("message", 
				"You successfully uploaded " + file.getOriginalFilename() + "!");
		
		return "redirect:/";
		
	}
	
	@ExceptionHandler(StorageFileNotFoundException.class) 
	public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException e) {
		
		return ResponseEntity.notFound().build();
		
	}

}
