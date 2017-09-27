package com.gms.web.command;

import org.springframework.stereotype.Component
;

import lombok.Data;




@Data @Component
public class ResultMap {

 private String  id,regdate,title,content,count;
 private int articleSeq,hitcount;
}
