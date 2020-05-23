package in.tucaurto.model;



import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="properties")
public class Property {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	@Column(name="proptery_id")
	private int id;
	
	@Column(name="property_name")
	private String name;
	
	@Column(name="property_desc")
	private String description;
	
	@Column(name="property_address")
	private String address;
	
	
	@Column (name="property_price")
	private Double price;

	
	@Column(name="property_image")
	private String imageUrl;
	
	@Column(name="property_city")
	private String city;
	
	@Override
	public String toString() {
		return "Property [id=" + id + ", name=" + name + ", description=" + description + ", address=" + address
				+ ", price=" + price + ", imageUrl=" + imageUrl + ", city=" + city+" ]";
	}
	
	
}
