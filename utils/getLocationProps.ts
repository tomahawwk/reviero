import {intersectionWith, isEqual} from 'lodash';

export const getCity = (data: any, id: any) => {
  return data?.cities.filter((item: any) => item.id === id)[0];
};

export const getCountry = (data: any, id: any) => {
  return data?.countries.filter((item: any) => item.id === id)[0];
};

export const getArea = (data: any, id: any) => {
  return data?.areas.filter((item: any) => item.id === id)[0];
};

export const getFeatures = (data: any, ids: any) => {
  return intersectionWith(data, ids, (a: any, b: any) => isEqual(a.id.toString(), b.toString()));
};
