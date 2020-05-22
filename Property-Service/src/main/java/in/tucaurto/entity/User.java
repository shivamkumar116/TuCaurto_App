package in.tucaurto.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "users")
@Data
@Entity
@NoArgsConstructor
public class User {

	
	@Id
	private String email;

	private String name;
	private long contactNumber;
	private String gender;
	private String imageUrl;
	private String address;
	private String city;
	private int pincode;
	private String state;
	
	
	
	  @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.REMOVE,CascadeType.DETACH}, mappedBy = "user") 
	  @JsonBackReference
	  private List<Property> property;
	 
	

}
