import {
  GetMarketplaceRequest,
  GetMarketplaceResponse,
} from '@/app/@types/protobuf-types';
import {apiUrl} from '@/app/store/apiURL';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const marketplaceApi = createApi({
  reducerPath: 'api/marketplace',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: build => ({
    getHouses: build.query<
      GetMarketplaceResponse,
      Partial<GetMarketplaceRequest>
    >({
      query: params => {
        return {
          url: 'marketplace',
          params: {...params},
        };
      },
    }),
    filterHouses: build.mutation<
      GetMarketplaceResponse,
      Partial<GetMarketplaceRequest>
    >({
      query: params => {
        return {
          url: 'marketplace',
          params: {...params},
        };
      },
    }),
  }),
});

export const {useGetHousesQuery, useFilterHousesMutation} = marketplaceApi;
