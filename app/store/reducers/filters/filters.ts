import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filterParams: [],
    sortValue: '',
    bedroomsValue: '',
    bathroomsValue: '',
    minPrice: 0,
    maxPrice: 0,
    countResults: 0,
    offset: 0,
  },
  reducers: {
    setFiltersParams(state, action: PayloadAction<[]>) {
      state.filterParams = action.payload;
    },
    setSortFilter(state, action: PayloadAction<string>) {
      state.sortValue = action.payload;
    },
    setBedroomsFilter(state, action: PayloadAction<string>) {
      state.bedroomsValue = action.payload;
    },
    setBathroomsFilter(state, action: PayloadAction<string>) {
      state.bathroomsValue = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.countResults = action.payload;
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
  },
});

export const {
  setFiltersParams,
  setSortFilter,
  setBedroomsFilter,
  setCount,
  setBathroomsFilter,
  setMinPrice,
  setMaxPrice,
  setOffset
} = filtersSlice.actions;

export const getFiltersSelector = (state: RootState) => state.filters;

export default filtersSlice.reducer;
