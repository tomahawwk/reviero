import {
  GetAreaPostsRequest,
  GetNotionRequest,
  GetNotionResponse,
  Notion,
  NotionSnippet,
} from '@/app/@types/protobuf-types';
import {apiUrl} from '@/app/store/apiURL';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {filter} from 'lodash';

type SnippetKey = keyof NotionSnippet;
type SnippetResponse<T extends SnippetKey = SnippetKey> = Pick<Notion, 'id'> &
  NotionSnippet[T];
type SnippetMapHandler = <T extends SnippetKey = SnippetKey>(
  key: T,
) => (item: Notion) => SnippetResponse<T>;

const snippetMap: SnippetMapHandler = key => item => ({
  id: item.id,
  ...(item.snippet?.[key] as any),
});

export interface GetLocationsResponse<T = SnippetResponse<'location'>> {
  items: T[];
  countries: T[];
  provinces: T[];
  cities: T[];
  areas: T[];
}

export interface GetFeaturesResponse<T = SnippetResponse<'feature'>> {
  items: T[];
  complex: T[];
  apartment: T[];
}

//TODO: импортить тип
enum NotionType {
  COMPLEX = 0,
  APARTMENT = 1,
  FEATURE = 2,
  CITY = 3,
  COUNTRY = 4,
  PROVINCE = 5,
  AREA = 6,
  DEVELOPER = 7,
  POST_FOR_AREA = 8,
  UNRECOGNIZED = -1,
}

enum PropertyType {
  COMPLEX = 0,
  APARTMENT = 1,
  VILLA = 2,
  UNRECOGNIZED = -1,
}

export const notionApi = createApi({
  reducerPath: 'api/notion',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: build => ({
    getLocations: build.query<GetLocationsResponse, Partial<GetNotionRequest>>({
      query: params => ({
        url: 'notion/locations',
        params,
      }),
      transformResponse: (data: GetNotionResponse) => {
        const map = snippetMap('location');
        return {
          items: data?.items?.map?.(map) ?? [],
          countries: filter(data?.items ?? [], {type: NotionType.COUNTRY}).map(
            map,
          ),
          provinces: filter(data?.items ?? [], {type: NotionType.PROVINCE}).map(
            map,
          ),
          cities: filter(data?.items ?? [], {type: NotionType.CITY}).map(map),
          areas: filter(data?.items ?? [], {type: NotionType.AREA}).map(map),
        };
      },
    }),

    getFeatures: build.query<GetFeaturesResponse, Partial<GetNotionRequest>>({
      query: params => ({
        url: 'notion/features',
        params,
      }),
      transformResponse: (data: GetNotionResponse) => {
        const map = snippetMap('feature');
        const items = data?.items?.map?.(map) ?? [];

        return {
          items,
          complex: filter(items, {type: [PropertyType.COMPLEX]}),
          apartment: filter(items, {type: [PropertyType.APARTMENT]}),
        };
      },
    }),

    getAreaPosts: build.query<GetNotionResponse, Partial<GetAreaPostsRequest>>({
      query: params => ({
        url: `notion/areas/${params.areaId}/posts`,
      }),
    }),
  }),
});

export const {useGetLocationsQuery, useGetFeaturesQuery, useGetAreaPostsQuery} =
  notionApi;
