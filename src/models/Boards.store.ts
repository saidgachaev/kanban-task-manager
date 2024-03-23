import { types } from 'mobx-state-tree';
import { BoardModel, BoardModelType } from './shared/Board.model';

const BoardsStore = types
	.model({
		boards: types.optional(types.array(BoardModel), []),
	})
	.actions((self) => {
		const addBoard = (board: BoardModelType) => {
			self.boards.push(board);
		};

		return { addBoard };
	});
export default BoardsStore;
