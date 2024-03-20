import { cast, flow, types } from 'mobx-state-tree';
import { BoardModel } from './shared/Board.model';

const BoardsStore = types.model({
	collections: types.optional(types.array(BoardModel), []),
});

export default BoardsStore;
