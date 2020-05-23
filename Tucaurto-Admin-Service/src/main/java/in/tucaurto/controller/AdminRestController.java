package in.tucaurto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import in.tucaurto.dao.UserDAo;
import in.tucaurto.service.PropertyService;

@RestController
@CrossOrigin("*")
public class AdminRestController {

	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private UserDAo userDao;
	
	
	@GetMapping("/getpropertycount")
	public ResponseEntity<Long> countProperty(){
		return ResponseEntity.ok().body(propertyService.countProperty());
		
	}
	
	@GetMapping("/getusercount")
	public ResponseEntity<Long> countUser(){
		return ResponseEntity.ok().body(userDao.countUser());
		
	}
}
