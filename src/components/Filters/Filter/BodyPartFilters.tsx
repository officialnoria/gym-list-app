import { observer } from 'mobx-react-lite';
import { useStores } from '../../../../stores';
import { GenericFilter } from '@/components/Filters/Filter/GenericFilter';
import { BodyPart } from '../../../../interfaces/exercise';
import { bodyPart } from '@/components/Filters/Filter/filters';

export const BodyPartFilters = observer(() => {
	const { filterStore } = useStores();
	return (
		<GenericFilter
			title={'Body Parts'}
			onFiltersChange={(bodyPart: BodyPart[]) => filterStore.addBodyPartFilters(bodyPart)}
			defaultValues={filterStore.bodyPart}
			filters={bodyPart}
		/>
	);
});