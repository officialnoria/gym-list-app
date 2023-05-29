import { applySnapshot, types } from 'mobx-state-tree';
import { BodyPart, Equipment, Target } from './enums';
import { BodyPart as TSBodyPart, Equipment as TSEquipment, Target as TSTarget } from '../interfaces/exercise';

export const FilterStoreModel = types
	.model('FilterStore')
	.props({
		bodyPart: types.optional(types.array(BodyPart), []),
		equipment: types.optional(types.array(Equipment), []),
		target: types.optional(types.array(Target), []),
		name: types.optional(types.string, ''),
	})
	.actions((self) => ({
		addBodyPartFilters(bodyPart: TSBodyPart[]) {
			self.bodyPart.replace(bodyPart);
		},

		clearBodyPartFilters() {
			self.bodyPart.clear();
		},

		addEquipmentFilters(equipment: TSEquipment[]) {
			self.equipment.replace(equipment);
		},

		clearEquipmentFilters() {
			self.equipment.clear();
		},

		addTargetFilters(target: TSTarget[]) {
			self.target.replace(target);
		},

		clearTargetFilters() {
			self.target.clear();
		},

		setName(name: string) {
			self.name = name;
		},

		reset() {
			applySnapshot(self, initialState);
		},
	}));

const initialState = {
	bodyPart: [],
	equipment: [],
	target: [],
	name: '',
};

export const createFilterStoreDefaultModel = () => types.optional(FilterStoreModel, initialState);