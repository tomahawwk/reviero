import {configureStore} from '@reduxjs/toolkit';
import {notionApi} from './reducers/services/services.api';
import {propertyApi} from './reducers/property/property.api';
import {marketplaceApi} from './reducers/marketplace/marketplace.api';
import {modal} from './reducers/modal/modal';
import {ModalState} from './reducers/modal/types';
import filters from './reducers/filters/filters'

export interface RootState {
  modal: ModalState;
  filters: any;
}

export const store = configureStore({
  reducer: {
    [marketplaceApi.reducerPath]: marketplaceApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [notionApi.reducerPath]: notionApi.reducer,
    modal,
    filters,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(marketplaceApi.middleware)
      .concat(propertyApi.middleware)
      .concat(notionApi.middleware)
});

export type RootStoreType = ReturnType<typeof store.getState>;
