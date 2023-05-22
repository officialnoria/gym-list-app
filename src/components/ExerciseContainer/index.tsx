'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from './styles.module.css';
import { SearchBar } from '@/components/SearchBar';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../stores';
import { ExercisesTable } from '@/components/ExercisesTable';

const transitionProp = 'all 0.5s ease-in-out';

export const ExerciseContainer = observer(() => {
	const { appStore } = useStores();

	return (
		<Box className={styles.container}>
			<SearchBar />
			<Flex h={'90vh'} overflow={'scroll'}>
				<Box w={appStore.filtersMenuOpen ? '30vw' : 0} transition={transitionProp}>
					<Text>{'Here be filters'}</Text>
				</Box>

				<ExercisesTable />
			</Flex>
		</Box>
	);
});
