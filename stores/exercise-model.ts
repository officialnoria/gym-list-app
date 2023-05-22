import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { BodyPart, Equipment, Target } from './enums';

export const ExerciseModel = types.model('ExerciseModel').props({
	bodyPart: BodyPart,
	equipment: Equipment,
	gifUrl: types.string,
	id: types.string,
	name: types.string,
	target: Target,
});

export type ExerciseModelType = Instance<typeof ExerciseModel>;

export interface ExerciseInterface extends ExerciseModelType {}

export type ExerciseModelSnapshotType = SnapshotOut<typeof ExerciseModel>;

export interface ExerciseModelSnapshot extends ExerciseModelSnapshotType {}
