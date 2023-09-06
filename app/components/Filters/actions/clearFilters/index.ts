import {
  setBathroomsFilter,
  setBedroomsFilter,
  setCount,
  setFiltersParams,
  setMaxPrice,
  setMinPrice,
  setSortFilter,
} from '@/app/store/reducers/filters/filters';

const clearFilters = (dispatch: any, filterParams: any) => {
  dispatch(setCount(0));
  dispatch(setSortFilter(''));
  dispatch(setBedroomsFilter(''));
  dispatch(setBathroomsFilter(''));
  dispatch(setMinPrice(0));
  dispatch(setMaxPrice(0));
  if (filterParams.length) dispatch(setFiltersParams([]));
};

export default clearFilters;
