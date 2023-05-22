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
		addBodyPart(bodyPart: TSBodyPart) {
			self.bodyPart.push(bodyPart);
		},

		removeBodyPart(bodyPart: TSBodyPart) {
			self.bodyPart.remove(bodyPart);
		},

		addEquipment(equipment: TSEquipment) {
			self.equipment.push(equipment);
		},

		removeEquipment(equipment: TSEquipment) {
			self.equipment.remove(equipment);
		},

		addTarget(target: TSTarget) {
			self.target.push(target);
		},

		removeTarget(target: TSTarget) {
			self.target.remove(target);
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
