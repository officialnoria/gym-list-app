import { observer } from 'mobx-react-lite';
import { Input } from '@chakra-ui/input';
import { useStores } from '../../../stores';
import { Flex, FormControl, FormLabel, Icon } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { debounce } from 'lodash';

const iconSize = '24px';

export const SearchBar = observer(() => {
	const { filterStore, appStore } = useStores();

	const onSearchChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
		filterStore.setName(event.target.value);
	}, 500);

	const onMenuClick = () => {
		appStore.toggleFiltersMenu();
	};

	return (
		<Flex alignItems={'center'}>
			<Icon as={GiHamburgerMenu} w={iconSize} h={iconSize} cursor={'pointer'} mx={'20px'} onClick={onMenuClick} />
			<FormControl>
				<FormLabel>Exercise name</FormLabel>
				<Input defaultValue={filterStore.name} type='text' onChange={onSearchChange} />
			</FormControl>
		</Flex>
	);
});