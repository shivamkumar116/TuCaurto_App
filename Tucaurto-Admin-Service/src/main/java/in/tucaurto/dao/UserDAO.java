package in.tucaurto.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import in.tucaurto.entity.User;
import in.tucaurto.entity.UserDTO;
@Repository
@EnableTransactionManagement
public interface UserDAO extends JpaRepository<User, String> 
{
	public User findByEmail(String email);
	public List<User> findByCity(String city);
	public List<User> findByNameContaining(String name);
	public User findByContactNumber(long contactNumber);
	
}
