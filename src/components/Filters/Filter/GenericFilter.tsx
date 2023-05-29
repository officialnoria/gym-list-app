import { observer } from 'mobx-react-lite';
import { Box, Checkbox, CheckboxGroup, Flex, Icon, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import { nanoid } from 'nanoid';
import { uppercaseEachWord } from '../../../../utils';
import { useState } from 'react';

interface Props {
	title: string;
	onFiltersChange: (value: any[]) => void;
	defaultValues: any[];
	filters: any[];
}

export const GenericFilter = observer(({ title, onFiltersChange, defaultValues, filters }: Props) => {
	const [showFilters, setShowFilters] = useState(false);
	return (
		<Box>
			<Flex alignItems={'center'} gap={'10px'} onClick={() => setShowFilters((prevState) => !prevState)} cursor={'pointer'}>
				{showFilters ? <Icon as={MdChevronRight} boxSize={8} style={{ rotate: '90deg' }} /> : <Icon as={MdChevronRight} boxSize={8} />}
				<Text userSelect={'none'}>{title}</Text>
			</Flex>
			{showFilters && (
				<CheckboxGroup colorScheme={'yellow'} onChange={onFiltersChange} defaultValue={defaultValues}>
					{filters.map((e) => (
						<Box key={nanoid()} w={'100%'} my={'10px'} ml={'10px'}>
							<Checkbox key={nanoid()} value={e}>
								{uppercaseEachWord(e)}
							</Checkbox>
						</Box>
					))}
				</CheckboxGroup>
			)}
		</Box>
	);
});