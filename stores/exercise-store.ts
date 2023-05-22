import { types } from 'mobx-state-tree';
import { ExerciseModel } from './exercise-model';
import data from '../public/exercises.json';
import { BodyPart, Equipment, Exercise, Target } from '../interfaces/exercise';
import { wait } from '../utils';

export const ExerciseStoreModel = types
	.model('ExerciseStore')
	.props({
		exercises: types.array(ExerciseModel),
		loading: types.optional(types.boolean, false),
	})
	.actions((self) => ({
		sortExercises(ex: Exercise[]) {
			return ex.sort((a, b) => parseInt(a.id) - parseInt(b.id));
		},

		setLoading(loading: boolean) {
			self.loading = loading;
		},
		setExercises(exercises: Exercise[]) {
			self.exercises.clear();
			self.exercises.replace(exercises);
		},
	}))
	.actions((self) => ({
		filter(bodyPart: BodyPart[], equipment: Equipment[], target: Target[], name: string) {
			self.setLoading(true);

			let results = data as Exercise[];

			if (bodyPart.length > 0) {
				for (const bodyPartElement of bodyPart) {
					results = results.filter((exercise) => {
						return exercise.bodyPart === bodyPartElement;
					});
				}
			}

			if (equipment.length > 0) {
				for (const equipmentElement of equipment) {
					results = results.filter((exercise) => {
						return exercise.equipment === equipmentElement;
					});
				}
			}

			if (target.length > 0) {
				for (const targetElement of target) {
					results = results.filter((exercise) => {
						return exercise.target === targetElement;
					});
				}
			}

			if (name.length > 0) {
				results = results.filter((exercise) => {
					return exercise.name.toLowerCase().includes(name.toLowerCase());
				});
			}

			self.setExercises(self.sortExercises(results));

			wait(1000).then(() => {
				self.setLoading(false);
			});
		},

		resetFilters() {
			self.exercises.replace(data as Exercise[]);
		},
	}));

export const createExerciseStoreDefaultModel = () => {
	const exercisesArray = data.map((exercise) => {
		return ExerciseModel.create({
			bodyPart: exercise.bodyPart as BodyPart,
			equipment: exercise.equipment as Equipment,
			gifUrl: exercise.gifUrl,
			id: exercise.id,
			name: exercise.name,
			target: exercise.target as Target,
		});
	});

	return types.optional(ExerciseStoreModel, { exercises: exercisesArray });
};