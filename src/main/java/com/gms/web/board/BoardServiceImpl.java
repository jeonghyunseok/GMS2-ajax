package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gms.web.board.BoardDTO;
@Service
public class BoardServiceImpl implements BoardService {
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
	}
	private BoardServiceImpl() {
	}

	@Override
	public String write(BoardDTO bean) {
		return null;
	}

	@Override
	public List<BoardDTO> list() {
		return null;
	}

	@Override
	public List<BoardDTO> findById(String id) {

		return null;
	}

	@Override
	public BoardDTO findByseq(String seq) {

		return null;
	}

	@Override
	public String modify(BoardDTO bean) {

		return null;
	}

	@Override
	public String remove(String seq) {

		return null;
	}

	@Override
	public int countAriticle() {

		return 0;
	}

}
