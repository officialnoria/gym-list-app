import { observer } from 'mobx-react-lite';
import { Box, Image, Text } from '@chakra-ui/react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useStores } from '../../../stores';
import { Exercise } from '../../../interfaces/exercise';
import { uppercaseEachWord } from '../../../utils';
import { useCallback, useEffect, useState } from 'react';
import data from '../../../public/exercises.json';

const columns: TableColumn<Exercise>[] = [
	{
		name: 'Body Part',
		selector: (row) => row.bodyPart,
		cell: (row) => <Text>{uppercaseEachWord(row.bodyPart)}</Text>,
		sortable: true,
	},
	{
		name: 'Equipment',
		selector: (row) => row.equipment,
		cell: (row) => <Text>{uppercaseEachWord(row.equipment)}</Text>,
		sortable: true,
	},
	{
		name: 'Image',
		selector: (row) => row.gifUrl,
		cell: (row) => <Image src={row.gifUrl} alt={row.name} width={360} height={360} />,
	},
	{
		name: 'Name',
		selector: (row) => row.name,
		cell: (row) => <Text>{uppercaseEachWord(row.name)}</Text>,
		sortable: true,
	},
	{
		name: 'Target',
		selector: (row) => row.target,
		cell: (row) => <Text>{uppercaseEachWord(row.target)}</Text>,
		sortable: true,
	},
];

const transitionProp = 'all 0.5s ease-in-out';

const sortExercises = (ex: Exercise[]) => {
	return ex.sort((a, b) => parseInt(a.id) - parseInt(b.id));
};

export const ExercisesTable = observer(() => {
	const { appStore, filterStore } = useStores();

	const [filteredExercises, setFilteredExercises] = useState<Exercise[]>(data as Exercise[]);

	const filter = useCallback(() => {
		let results = data as Exercise[];

		if (filterStore.bodyPart.length > 0) {
			for (const bodyPartElement of filterStore.bodyPart) {
				results = results.filter((exercise) => {
					return exercise.bodyPart === bodyPartElement;
				});
			}
		}

		if (filterStore.equipment.length > 0) {
			for (const equipmentElement of filterStore.equipment) {
				results = results.filter((exercise) => {
					return exercise.equipment === equipmentElement;
				});
			}
		}

		if (filterStore.target.length > 0) {
			for (const targetElement of filterStore.target) {
				results = results.filter((exercise) => {
					return exercise.target === targetElement;
				});
			}
		}

		if (filterStore.name.length > 0) {
			results = results.filter((exercise) => {
				return exercise.name.toLowerCase().includes(filterStore.name.toLowerCase());
			});
		}

		setFilteredExercises(sortExercises(results));
	}, [filterStore.bodyPart, filterStore.equipment, filterStore.name, filterStore.target]);

	useEffect(() => {
		filter();
	}, [filter]);

	return (
		<Box w={appStore.filtersMenuOpen ? '70vw' : '100vw'} transition={transitionProp}>
			<DataTable responsive columns={columns} data={filteredExercises} pagination theme={'dark'} />
		</Box>
	);
});