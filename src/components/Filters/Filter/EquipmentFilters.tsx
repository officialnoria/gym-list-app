import { observer } from 'mobx-react-lite';
import { Equipment } from '../../../../interfaces/exercise';
import { useStores } from '../../../../stores';
import { equipment } from '@/components/Filters/Filter/filters';
import { GenericFilter } from '@/components/Filters/Filter/GenericFilter';

export const EquipmentFilters = observer(() => {
	const { filterStore } = useStores();
	return (
		<GenericFilter
			title={'Equipment'}
			onFiltersChange={(equipment: Equipment[]) => filterStore.addEquipmentFilters(equipment)}
			defaultValues={filterStore.equipment}
			filters={equipment}
		/>
	);
});