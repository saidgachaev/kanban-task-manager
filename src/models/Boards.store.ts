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

		const selectBoard = (id: number) => {
			self.boards.forEach(board => {
				if(board.id == id) {
					board.selected == true
				}
			})
		}

		return { addBoard, selectBoard };
	}).views((self) => {
		const getSelectedBoard = () => {
            return self.boards.find(board => board.selected);
        };
        return { getSelectedBoard };
	})
export default BoardsStore;
