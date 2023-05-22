'use client';
import { RootStore, RootStoreModel } from './root-store';
import { onSnapshot } from 'mobx-state-tree';

export const setupRootStore = () => {
	let rootStore: RootStore;
	let data: any;

	try {
		data = localStorage.getItem('rootStore') || '{}';
		rootStore = RootStoreModel.create(JSON.parse(data));
	} catch (e) {
		rootStore = RootStoreModel.create({});
		console.error(e);
	}

	onSnapshot(rootStore, (snapshot) => {
		localStorage.setItem('rootStore', JSON.stringify(snapshot));
	});

	return rootStore;
};
