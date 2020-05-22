package in.tucaurto.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.tucaurto.entity.User;
import in.tucaurto.entity.UserDTO;
import in.tucaurto.service.UserService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user-api")
public class UserController 
{
	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/users")
	public ResponseEntity<?> updateUser(@RequestBody UserDTO userDto)
	{
		return userService.updateUser(userDto);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> listUsers()
	{
		return ResponseEntity.ok().body(userService.listAllUsers());
	}
	
	
	@DeleteMapping("/users/{userId}")
	public ResponseEntity<String> deleteUser(@PathVariable(name="userId") String email)
	{
		return ResponseEntity.ok().body(userService.deleteUser(email));
	}
	
	@GetMapping("/users/{userId}")
	public ResponseEntity<User> findUser(@PathVariable(name="userId") String email)
	{
		return ResponseEntity.ok().body(userService.findUser(email));
	}
	
	@GetMapping("/users/city/{cityName}")
	public ResponseEntity<List<User>> findByCity(@PathVariable(name="cityName") String city)
	{
		return ResponseEntity.ok().body(userService.findByCity(city));
	}
	
	@GetMapping("/users/name/{userName}")
	public ResponseEntity<List<User>> findByNameContaining(@PathVariable(name="userName") String name)
	{
		return ResponseEntity.ok().body(userService.findByNameContaining(name));
	}
	
	@GetMapping("/users/phone/{phone}")
	public ResponseEntity<User> findByPhone(@PathVariable(name="phone") long phone)
	{
		return ResponseEntity.ok().body(userService.findByContactNumber(phone));
	}
}
