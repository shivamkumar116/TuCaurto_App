package in.tucaurto.service;

//This class contains two functions for E-mail sending. 
//One is of Simple Mail and other is of mail that contains an attachment.

//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import in.tucaurto.model.User;


@Service
public class MailService
{

	private JavaMailSender javaMailSender;
	@Autowired
	public MailService(JavaMailSender javaMailSender)
	{
		this.javaMailSender = javaMailSender;
	}

	public void sendEmail(User user) throws MailException
	{

		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getUsername());
		mail.setSubject("Tu Caurto");
		StringBuilder builder= new StringBuilder("Thank you for registering!");
		builder.append("\nYour credentials for logging in are as follows:-\n");
		builder.append("\nUsername:"+ user.getUsername());
		builder.append("\nPassword:"+ user.getPassword());
		builder.append("\nThank you\nTu Caurto Team");
		
		
		mail.setText(builder.toString());

		
		javaMailSender.send(mail);
	}


}

