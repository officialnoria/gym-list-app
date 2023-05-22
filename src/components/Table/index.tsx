import { observer } from 'mobx-react-lite';
import { TableContainer, Tbody, Td, Tfoot, Th, Table, Thead, Tr, Image } from '@chakra-ui/react';
import { useStores } from '../../../stores';

const headers = ['Body Part', 'Equipment', 'Image', 'Name', 'Target'];
export const TableComponent = observer(() => {
	const { exerciseStore } = useStores();
	const data = exerciseStore.exercises;
	return (
		<TableContainer>
			<Table size='sm'>
				<Thead>
					<Tr>
						{headers.map((header, index) => {
							return <Th key={index}>{header}</Th>;
						})}
					</Tr>
				</Thead>
				<Tbody>
					{data.map((exercise, index) => {
						return (
							<Tr key={index}>
								<Td>{exercise.bodyPart}</Td>
								<Td>{exercise.equipment}</Td>
								<Td>
									<Image src={exercise.gifUrl} alt={exercise.name} width={360} height={360} />
								</Td>
								<Td>{exercise.name}</Td>
								<Td>{exercise.target}</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
});