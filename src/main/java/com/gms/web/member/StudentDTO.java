package com.gms.web.member;

import org.springframework.context.annotation.Lazy;


import org.springframework.stereotype.Component;

import lombok.Data;



@Data @Lazy @Component
public class StudentDTO {
	private int num;
	private String id,name,ssn,regdate,phone,email,title,subjects,password;

}
