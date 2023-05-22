import { Instance, types } from 'mobx-state-tree';
import { createFilterStoreDefaultModel } from './filter-store';
import { createAppStoreDefaultModel } from './app-store';

export const RootStoreModel = types
	.model('RootStore')
	.props({
		filterStore: createFilterStoreDefaultModel(),
		appStore: createAppStoreDefaultModel(),
	})
	.actions((self) => ({
		reset() {},
	}));

export interface RootStore extends Instance<typeof RootStoreModel> {}