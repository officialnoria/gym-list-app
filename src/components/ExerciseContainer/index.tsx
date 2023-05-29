'use client';
import { Box, Flex } from '@chakra-ui/react';
import styles from './styles.module.css';
import { SearchBar } from '@/components/SearchBar';
import { observer } from 'mobx-react-lite';
import { ExercisesTable } from '@/components/ExercisesTable';
import { FiltersContainer } from '@/components/Filters/FiltersContainer';

export const ExerciseContainer = observer(() => {
	return (
		<Box className={styles.container}>
			<SearchBar />
			<Flex h={'90vh'} overflow={'scroll'} pos={'relative'}>
				<FiltersContainer />
				<ExercisesTable />
			</Flex>
		</Box>
	);
});