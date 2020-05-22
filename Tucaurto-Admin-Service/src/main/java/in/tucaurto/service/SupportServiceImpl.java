package in.tucaurto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.tucaurto.dao.SupportDAO;
import in.tucaurto.entity.CustomerSupport;
import in.tucaurto.entity.Role;
import in.tucaurto.entity.SupportDTO;
import in.tucaurto.entity.UserLogin;

@Service
public class SupportServiceImpl implements SupportService 
{


	@Autowired
	private SupportDAO supportDao;
	
	public SupportServiceImpl(SupportDAO supportDao) {
		super();
		this.supportDao = supportDao;
	}
	
	
	@Override
	public String createSupport(SupportDTO support) 
	{
		if(supportDao.existsById(support.getUsername()))
		{
			
			return "Support with given details already exists!!";
		}
		Role r=new Role();
		r.setId(2);
		r.setRole("ROLE_SUPPORT");
		
		UserLogin u=new UserLogin();
		u.setUsername(support.getUsername());
		u.setPassword(support.getPassword());
		u.setRole(r);
		CustomerSupport cs=new CustomerSupport();
		cs.setName(support.getName());
		cs.setUsername(support.getUsername());
		cs.setUserLogin(u);
		cs.setContactNumber(support.getContactNumber());
		supportDao.save(cs);
		
		return "Support role created";
		
	}
	
	

	@Override
	public String deleteByUsername(String username) {
		supportDao.deleteById(username);
		System.out.println("");
		return "Support role deleted!!";
	}

	@Override
	public List<CustomerSupport> findByNameContaining(String name) {

		return supportDao.findByNameContaining(name);
	}

	@Override
	public CustomerSupport findByContactNumber(long number) {
		
		return supportDao.findByContactNumber(number);
	}

	@Override
	public CustomerSupport findByUsername(String username) 
	{
		return supportDao.findByUsername(username);
	}

	@Override
	public List<CustomerSupport> findAll() {

		return supportDao.findAll();
	}

}
