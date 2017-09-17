package com.gms.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class BoardDTO {
	private String id, regdate, title, content;
	private int articleSeq, hitcount;


}