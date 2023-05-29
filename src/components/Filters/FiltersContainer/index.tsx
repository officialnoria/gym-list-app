'use client';
import { observer } from 'mobx-react-lite';
import { Box, Button } from '@chakra-ui/react';
import { useStores } from '../../../../stores';
import { EquipmentFilters } from '@/components';
import { BodyPartFilters } from '@/components/Filters/Filter/BodyPartFilters';
import { TargetPartFilters } from '@/components/Filters/Filter/TargetPartFilters';
import { CSSProperties } from 'react';

export const FiltersContainer = observer(() => {
	const { appStore, filterStore } = useStores();

	const onButtonClicked = () => {
		filterStore.reset();
		appStore.toggleFiltersMenu();
	};

	const containerStyle: CSSProperties = {
		position: 'absolute',
		top: '0',
		left: appStore.filtersMenuOpen ? '0' : '-100%',
		height: '90vh',
		overflow: 'scroll',
		backgroundColor: 'black',
		zIndex: 10,
		padding: '0 20px',
	};

	return (
		<Box style={containerStyle}>
			{appStore.filtersMenuOpen ? (
				<>
					<EquipmentFilters />
					<BodyPartFilters />
					<TargetPartFilters />
					<Button onClick={onButtonClicked} colorScheme={'red'} bg={'red'}>
						{'Reset all Filters'}
					</Button>
				</>
			) : null}
		</Box>
	);
});