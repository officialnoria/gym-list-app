import { types } from 'mobx-state-tree';

export const AppStoreModel = types
	.model('AppStore')
	.props({
		filtersMenuOpen: types.optional(types.boolean, false),
	})
	.actions((self) => ({
		toggleFiltersMenu() {
			self.filtersMenuOpen = !self.filtersMenuOpen;
		},
	}));

const initialState = {
	filtersMenuOpen: false,
};

export const createAppStoreDefaultModel = () => types.optional(AppStoreModel, initialState);
