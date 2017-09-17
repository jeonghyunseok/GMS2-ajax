package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.BoardDTO;
@Component
public interface BoardService {
	public String write(BoardDTO bean);

	public List<BoardDTO> list();

	public List<BoardDTO> findById(String id);

	public int countAriticle();

	public BoardDTO findByseq(String seq);

	public String modify(BoardDTO article);

	public String remove(String id);
}
