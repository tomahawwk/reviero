import {ModalState} from './reducers/modal/types';
import { calculationsApi } from './reducers/calculations/calculations.api';
import {configureStore} from '@reduxjs/toolkit';
import filters from './reducers/filters/filters'
import {marketplaceApi} from './reducers/marketplace/marketplace.api';
import {modal} from './reducers/modal/modal';
import {notionApi} from './reducers/services/services.api';
import {propertyApi} from './reducers/property/property.api';

export interface RootState {
  modal: ModalState;
  filters: any;
}

export const store = configureStore({
  reducer: {
    [marketplaceApi.reducerPath]: marketplaceApi.reducer,
    [calculationsApi.reducerPath]: calculationsApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [notionApi.reducerPath]: notionApi.reducer,
    modal,
    filters,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(calculationsApi.middleware)
      .concat(marketplaceApi.middleware)
      .concat(propertyApi.middleware)
      .concat(notionApi.middleware)
});

export type RootStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;