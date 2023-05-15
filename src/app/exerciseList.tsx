'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Exercise } from '../../interfaces/exercise';
import DataTable, { TableColumn } from 'react-data-table-component';
import data from '../../public/exercises.json';

const exercises: Exercise[] = data as Exercise[];

export const ExerciseList = () => {
	const [filteredExercises, setFilteredExercises] = useState<Exercise[]>(exercises);

	// const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
	//   if(!event.target.files) return;
	//
	//   const file = event.target.files[0];
	//   const reader = new FileReader();
	//   reader.onload = (event) => {
	//     if(!event.target) return;
	//     const exercises = readerOnLoad(event.target.result as string);
	//     // console.log([...new Set(exercises.map((exercise) => exercise.equipment))])
	//     console.log(exercises.filter(exercise => exercise.equipment === undefined));
	//     setExercises(exercises);
	//   }
	//   reader.readAsText(file);
	// }

	const columns: TableColumn<Exercise>[] = [
		{
			name: 'Body Part',
			selector: (row) => row.bodyPart,
			sortable: true,
		},
		{
			name: 'Equipment',
			selector: (row) => row.equipment,
			sortable: true,
		},
		{
			name: 'Image',
			selector: (row) => row.gifUrl,
			cell: (row) => <img src={row.gifUrl} alt={row.name} width={360} height={360} />,
		},
		{
			name: 'Name',
			selector: (row) => row.name,
			sortable: true,
		},
		{
			name: 'Target',
			selector: (row) => row.target,
			sortable: true,
		},
	];

	const handleTargetSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		if (searchValue === '') {
			setFilteredExercises(exercises);
			return;
		}
		const filteredExercises: Exercise[] = exercises.filter((exercise) =>
			exercise.target.toLowerCase().includes(searchValue.toLowerCase())
		) as Exercise[];
		setFilteredExercises(filteredExercises);
	};

	return (
		<div className={'flex justify-between align-center'}>
			<div>
				<label htmlFor='search'>Search by target</label>
				<input type='text' id='search' onChange={handleTargetSearch} />
			</div>
			<div>
				<DataTable columns={columns} data={filteredExercises} pagination />
			</div>
		</div>
	);
};