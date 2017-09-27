package com.gms.web.board;
import java.util.HashMap;



import java.util.List;
import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;
import com.gms.web.common.HomeController;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;


@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	public @ResponseBody Map<?,?> post(){
		return null;
	};
	
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?, ?> boardDelete(Model model,@PathVariable String cate) {
		logger.info("board ContList{}","진입");
		Map<String, Object> map=new HashMap<>();
		System.out.println("/board/list에 들어옴!!");
		IListService listService=null;
		@SuppressWarnings("unused")
		IGetService countService=null;
		switch(cate){
		case "board":
			cmd=null;
			listService= (x)-> {
				return boardMapper.selectList(cmd);
				};			
			countService=(x)->{
				return boardMapper.count(cmd);
				};
			
			ResultMap r=(ResultMap)countService.execute(cmd);
			map.put("result","success");
			map.put("total",r);
			map.put("list",listService.execute(cmd));
			map.put("msg", null);
			break;
		
		case "grade": 
			cmd=null;
			listService= (x)-> {
				return gradeMapper.selectSome(cmd);
				};
				map.put("list",listService.execute(cmd));
			break;
		
		default:
			break;
		}
		return map;
	}
	@SuppressWarnings("null")
	@RequestMapping("/get/{cate}/{seq}")
	public @ResponseBody Map<?,?> get(Model model,@PathVariable String seq,@PathVariable String cate){
		IGetService detailService=null;
		System.out.println(seq);
		 Map<String,Object> map= new HashMap<>();
		 ResultMap bean=null;
		 switch(cate){
		 	case "board": 
		 		System.out.println("보드진입");
		 		cmd=new Command();
		 		cmd.setSearch(seq);
		 		cmd.setColumn("article_seq");
		 		detailService=(x)->{
		 			return boardMapper.selectOne(cmd);
		 			};
		 			bean= (ResultMap) detailService.execute(cmd);
		 			map.put("bean",bean);	
		 		break;
		 	}
		 return map;
	};
	
	@SuppressWarnings("unused")
	@RequestMapping(value="/put/board",
	method=RequestMethod.POST,
	consumes="application/json")
	public @ResponseBody Map<?, ?> put(@RequestBody Board board){
		IPutService updateService=null;
		Map<String,Object> map= new HashMap<>();
		 ResultMap bean=null;
		 map.put("msg", board.getTitle());
		 map.put("seq", board.getArticleSeq());
		 cmd.setSearch(String.valueOf(board.getArticleSeq()));
		 cmd.setColumn(board.getTitle());
		 cmd.setAction(board.getContent());
		 updateService=x->{
			boardMapper.update(cmd);
		 };
		 updateService.execute(cmd);
		 map.put("articleSeq", cmd.getSearch());
		return map;
	};
	@SuppressWarnings("unused")
	@RequestMapping(value="/delete/board",
	method=RequestMethod.POST,
	consumes="application/json")
public @ResponseBody Map<?,?> delete(@RequestBody Board board){
		IDeleteService deleteService=null;
		Map<String,Object> map= new HashMap<>();
		map.put("seq", board.getArticleSeq());
		cmd.setSearch(String.valueOf(board.getArticleSeq()));
		deleteService=x->{
			boardMapper.delete(cmd);
		};
		 deleteService.execute(cmd);
		 map.put("articleSeq", cmd.getSearch());
		return map;
	};
}