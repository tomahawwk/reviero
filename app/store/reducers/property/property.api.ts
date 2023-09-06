import {
  GetMarketplacePropertyRequest,
  GetMarketplacePropertyResponse,
} from '@/app/@types/protobuf-types';
import {apiUrl} from '@/app/store/apiURL';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const propertyApi = createApi({
  reducerPath: 'api/marketplace/properties',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: build => ({
    getProperty: build.query<
      GetMarketplacePropertyResponse,
      GetMarketplacePropertyRequest
    >({
      query: ({id}) => {
        return {
          url: `marketplace/properties/${id}`,
        };
      },
    }),
  }),
});

export const {useGetPropertyQuery} = propertyApi;
