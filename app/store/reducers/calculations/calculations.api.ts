import {
  GetEstimateIncomeRequest,
  GetEstimatePurchasePriceRequest,
  GetEstimatePurchasePriceResponse,
  GetMacroeconomicResponse,
  GetEstimateIncomeResponse as IGetEstimateIncomeResponse,
} from '@/app/@types/protobuf-types';

import {apiUrl} from '@/app/store/apiURL';
import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type GetEstimateIncomeResponse = IGetEstimateIncomeResponse & {
  estimate: IGetEstimateIncomeResponse['euCitizen' | 'nonEuCitizen'];
};

export const calculationsApi = createApi({
  reducerPath: 'api/calculations',
  baseQuery: fetchBaseQuery({baseUrl: `${apiUrl}calculations`}),
  endpoints: builder => ({
    getMacroeconomic: builder.query<GetMacroeconomicResponse, void>({
      query: () => ({
        url: '/macroeconomic',
      }),
    }),

    getEstimatePurchasePrice: builder.query<
      GetEstimatePurchasePriceResponse,
      GetEstimatePurchasePriceRequest
    >({
      query: params => ({
        url: '/purchase-price',
        params,
      }),
    }),

    getEstimateIncome: builder.query<
      GetEstimateIncomeResponse,
      GetEstimateIncomeRequest & {euCitizen?: boolean}
    >({
      query: ({euCitizen, ...params}) => ({
        url: '/estimate-income',
        params,
      }),
      transformResponse: (
        response: IGetEstimateIncomeResponse,
        meta,
        params,
      ) => ({
        ...response,
        estimate: params.euCitizen ? response.euCitizen : response.nonEuCitizen,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useGetMacroeconomicQuery,
  useGetEstimatePurchasePriceQuery,
  useGetEstimateIncomeQuery,
} = calculationsApi;
