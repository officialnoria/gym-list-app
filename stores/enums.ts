import { types } from 'mobx-state-tree';

export const Equipment = types.enumeration('Equipment', [
	'body weight',
	'cable',
	'leverage machine',
	'assisted',
	'medicine ball',
	'stability ball',
	'band',
	'barbell',
	'rope',
	'dumbbell',
	'ez barbell',
	'sled machine',
	'upper body ergometer',
	'kettlebell',
	'olympic barbell',
	'weighted',
	'bosu ball',
	'resistance band',
	'roller',
	'skierg machine',
	'hammer',
	'smith machine',
	'wheel roller',
	'stationary bike',
	'tire',
	'trap bar',
	'elliptical machine',
	'stepmill machine',
]);

export const BodyPart = types.enumeration('BodyPart', [
	'waist',
	'upper legs',
	'back',
	'lower legs',
	'chest',
	'upper arms',
	'cardio',
	'shoulders',
	'lower arms',
	'neck',
]);

export const Target = types.enumeration('Target', [
	'abs',
	'quads',
	'lats',
	'calves',
	'pectorals',
	'glutes',
	'hamstrings',
	'adductors',
	'triceps',
	'cardiovascular system',
	'spine',
	'upper back',
	'biceps',
	'delts',
	'forearms',
	'traps',
	'serratus anterior',
	'abductors',
	'levator scapulae',
]);