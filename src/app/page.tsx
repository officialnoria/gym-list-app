'use client';
import { RootStoreProvider, setupRootStore } from '../../stores';
import { ExerciseContainer } from '@/components';

export default function Home() {
	const rootStore = setupRootStore();
	return (
		<main>
			<RootStoreProvider value={rootStore}>
				<ExerciseContainer />
			</RootStoreProvider>
		</main>
	);
}
