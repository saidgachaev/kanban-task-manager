import { SnapshotOrInstance, types } from 'mobx-state-tree';

export type BoardModelType = SnapshotOrInstance<typeof BoardModel>;

export const BoardModel = types.model({
	id: types.identifierNumber,
	title: types.optional(types.string, 'New Board'),
	selected: types.maybeNull(types.boolean)
})
