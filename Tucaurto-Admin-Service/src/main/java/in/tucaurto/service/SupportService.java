package in.tucaurto.service;

import java.util.List;

import in.tucaurto.entity.CustomerSupport;
import in.tucaurto.entity.SupportDTO;

public interface SupportService 
{
	
	public String createSupport(SupportDTO support);
	public List<CustomerSupport> findAll();
	public String deleteByUsername(String email);
	public List<CustomerSupport> findByNameContaining(String name);
	public CustomerSupport findByContactNumber(long number);
	public CustomerSupport findByUsername(String username);
}
