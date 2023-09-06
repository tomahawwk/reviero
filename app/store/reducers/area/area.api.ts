import {
  GetAreaPostsRequest,
  GetNotionResponse,
} from '@/app/@types/protobuf-types';
import {apiUrl} from '@/app/store/apiURL';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const areaApi = createApi({
  reducerPath: 'api/notion/locations/areas',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: build => ({
    getPlaces: build.query<GetNotionResponse, Partial<GetAreaPostsRequest>>({
      query: id => `notion/areas/${id}/posts`,
    }),
  }),
});

export const {useGetPlacesQuery} = areaApi;
