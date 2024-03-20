import { SnapshotOrInstance, getRoot, types } from 'mobx-state-tree';
import { RootStoreInstance } from '../Root.store';

export type BoardModelType = SnapshotOrInstance<typeof BoardModel>;

export const BoardModel = types.model({
	id: types.identifierNumber,
	title: types.optional(types.string, 'Новая коллекция'),
});
