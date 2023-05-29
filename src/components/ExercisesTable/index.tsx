import { observer } from 'mobx-react-lite';
import { Box, Center, Image, Spinner, Text } from '@chakra-ui/react';
import DataTable, { ExpanderComponentProps, TableColumn } from 'react-data-table-component';
import { useStores } from '../../../stores';
import { Exercise } from '../../../interfaces/exercise';
import { uppercaseEachWord, wait } from '../../../utils';
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

const expandableRowComponent = ({ data }: ExpanderComponentProps<Exercise>) => {
	return (
		<Center w={'100%'} my={'20px'}>
			<Image src={data.gifUrl} alt={data.name} w={360} h={360} />
		</Center>
	);
};

const sortExercises = (ex: Exercise[]) => {
	return ex.sort((a, b) => parseInt(a.id) - parseInt(b.id));
};

export const ExercisesTable = observer(() => {
	const { filterStore } = useStores();

	const [filteredExercises, setFilteredExercises] = useState<Exercise[]>(data as Exercise[]);

	const [tableLoading, setTableLoading] = useState(true);

	const filter = useCallback(() => {
		let results = data as Exercise[];

		if (filterStore.bodyPart.length > 0) {
			results = results.filter((exercise) => {
				return filterStore.bodyPart.includes(exercise.bodyPart);
			});
		}

		if (filterStore.equipment.length > 0) {
			results = results.filter((exercise) => {
				return filterStore.equipment.includes(exercise.equipment);
			});
		}

		if (filterStore.target.length > 0) {
			results = results.filter((exercise) => {
				return filterStore.target.includes(exercise.target);
			});
		}

		if (filterStore.name.length > 0) {
			results = results.filter((exercise) => {
				return exercise.name.toLowerCase().includes(filterStore.name.toLowerCase());
			});
		}

		setFilteredExercises(sortExercises(results));
	}, [filterStore.bodyPart.length, filterStore.equipment.length, filterStore.name, filterStore.target.length]);

	useEffect(() => {
		filter();
	}, [filter]);

	useEffect(() => {
		setTableLoading(true);
		wait(500).then(() => setTableLoading(false));
	}, []);

	if (tableLoading) {
		return (
			<Center boxSize={'100%'}>
				<Spinner color={'yellow.500'} size={'xl'} />
			</Center>
		);
	}

	return (
		<Box w={'100%'}>
			<DataTable
				paginationPerPage={25}
				paginationRowsPerPageOptions={[25, 50, 100, 200]}
				expandOnRowClicked
				expandableRows
				expandableRowsComponent={expandableRowComponent}
				responsive
				columns={columns}
				data={filteredExercises}
				pagination
				theme={'dark'}
			/>
		</Box>
	);
});