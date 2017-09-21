package com.gms.web.mapper;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.gms.web.board.Board;
import com.gms.web.command.Command;
@Repository
public interface BoardMapper {
	public void insert(Command cmd);
	public List<Board> selectSome(Command cmd);
	public Board selectOne(Command cmd);
	public String count(Command cmd);
	public void update(Command cmd);
	public void delete(Command cmd);
}
