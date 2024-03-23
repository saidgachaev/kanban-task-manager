import { Instance, types } from 'mobx-state-tree';
import BoardsStore from './Boards.store';

export type RootStoreInstance = Instance<typeof RootStore>;

const RootStore = types.model({
	boardsStore: types.optional(BoardsStore, {}),
});

export default RootStore.create();
