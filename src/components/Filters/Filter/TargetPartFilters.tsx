import { observer } from 'mobx-react-lite';
import { useStores } from '../../../../stores';
import { GenericFilter } from '@/components/Filters/Filter/GenericFilter';
import { Target } from '../../../../interfaces/exercise';
import { targetFilters } from '@/components/Filters/Filter/filters';

export const TargetPartFilters = observer(() => {
	const { filterStore } = useStores();
	return (
		<GenericFilter
			title={'Target'}
			onFiltersChange={(target: Target[]) => filterStore.addTargetFilters(target)}
			defaultValues={filterStore.target}
			filters={targetFilters}
		/>
	);
});