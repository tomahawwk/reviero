import {
  getFiltersSelector,
  setBathroomsFilter,
  setBedroomsFilter,
  setCount,
  setFiltersParams,
  setMaxPrice,
  setMinPrice,
  setSortFilter,
} from '@/app/store/reducers/filters/filters';
import {useFilterHousesMutation} from '@/app/store/reducers/marketplace/marketplace.api';
import {CrossIcon} from '@/icons/Cross';
import {LoaderIcon} from '@/icons/Loader';
import {debounce} from 'lodash';
import {FC, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../ui/TextField';
import {
  clearFilters,
  setFilterParamsPair,
  setFilterSingleParam,
} from './actions';
import {bathroomOptions} from './options/bathroomsOptions';
import {bedroomOptions} from './options/bedroomsOptions';
import {sortOptions} from './options/sortOptions';
import {IFilters} from './types';

const FiltersDesktop: FC<IFilters> = ({onClose}) => {
  const {
    sortValue,
    bedroomsValue,
    bathroomsValue,
    countResults,
    filterParams,
    minPrice,
    maxPrice,
    offset,
  } = useSelector(getFiltersSelector);
  const [bathrooms, setBathrooms] = useState<any>(
    bathroomsValue
      ? bathroomOptions.filter(item => item.value == bathroomsValue)[0]
      : {value: ''},
  );
  const [bedrooms, setBedrooms] = useState<any>(
    bedroomsValue
      ? bedroomOptions.filter(item => item.value == bedroomsValue)[0]
      : {value: ''},
  );
  const [sort, setSort] = useState<any>(
    sortValue
      ? sortOptions.filter(item => item.value == sortValue)[0]
      : {value: ''},
  );
  const [minPriceFilter, setMinPriceFilter] = useState<number>(
    minPrice > 0 ? minPrice : 0,
  );
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(
    maxPrice > 0 ? maxPrice : 0,
  );
  const [filterHouses] = useFilterHousesMutation({});
  const [params, setParams] = useState(filterParams);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [isApplied, setApplied] = useState<boolean>(true);
  const setMinPriceDebounced = useRef(
    debounce(value => {
      dispatch(setMinPrice(value));
    }, 400),
  );
  const setMaxPriceDebounced = useRef(
    debounce(value => {
      dispatch(setMaxPrice(value));
    }, 400),
  );
  const dispatch = useDispatch();

  const showResultsHandler = () => {
    onClose();
    !isApplied && dispatch(setFiltersParams(params));
    setApplied(true);
  };

  const clearFiltersHandler = () => {
    onClose();
    clearFilters(dispatch, filterParams);
  };

  const changeFilterHandler = (callback: () => void) => {
    setApplied(false);
    callback();
  };

  useEffect(() => {
    if (minPrice > 0)
      setFilterSingleParam('minPrice', minPrice, params, setParams);
  }, [minPrice]);

  useEffect(() => {
    if (maxPrice > 0)
      setFilterSingleParam('maxPrice', maxPrice, params, setParams);
  }, [maxPrice]);

  useEffect(() => {
    if (bedrooms.value !== '') {
      setFilterParamsPair(
        [
          {minBedrooms: bedrooms.value === 'any' ? 0 : bedrooms.value},
          {
            maxBedrooms:
              bedrooms.value === 'any' || bedrooms.value === 4
                ? 10
                : bedrooms.value,
          },
        ],
        params,
        setParams,
      );
      dispatch(setBedroomsFilter(bedrooms.value));
    }
  }, [bedrooms]);

  useEffect(() => {
    if (bathrooms.value !== '') {
      setFilterParamsPair(
        [
          {minBathrooms: bathrooms.value === 'any' ? 0 : bathrooms.value},
          {
            maxBathrooms:
              bathrooms.value === 'any' || bathrooms.value === 4
                ? 10
                : bathrooms.value,
          },
        ],
        params,
        setParams,
      );
      dispatch(setBathroomsFilter(bathrooms.value));
    }
  }, [bathrooms]);

  useEffect(() => {
    if (sort.value !== '') {
      setFilterSingleParam('sortBy', sort.value, params, setParams);
      dispatch(setSortFilter(sort.value));
    }
  }, [sort]);

  useEffect(() => {
    if (params.length) {
      setFetching(true);
      let paramsObject = {}
      params.forEach((param: any) => {
        Object.assign(paramsObject, param)
      })
      filterHouses(paramsObject).then((data: any) => {
        dispatch(setCount(data.data.total));
        setTimeout(() => {
          setFetching(false);
        }, 400);
      });
    }
  }, [params]);

  return (
    <div
      className="h-full lg:h-auto lg:w-[544px] rounded-tl-md rounded-tr-md lg:rounded-br-md 
    lg:rounded-bl-md bg-white shadow-swipeModal lg:shadow-xl">
      <div className="grid grid-cols-3 border-b border-grey-600 px-md pb-[10px] pt-[14px]">
        <button
          className={`justify-self-start transition duration-300 ${
            countResults < 1
              ? 'text-grey-700 pointer-events-none'
              : 'text-primary-main'
          }`}
          onClick={clearFiltersHandler}>
          Clear all
        </button>
        <p className="text-center font-medium">Filter</p>
        <button className="justify-self-end" onClick={onClose}>
          <CrossIcon width={14} height={14} className="text-black" />
        </button>
      </div>
      <div className="p-sm md:p-md overflow-y-auto max-h-full no-swiping">
        <div className="flex flex-col gap-lg w-full max-md:pb-lg">
          <div className="flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <p className="leading-none font-medium">Sort by</p>
              <div className="max-xs:flex-wrap flex gap-[8px]">
                {sortOptions.map(item => {
                  return (
                    <div
                      className="checkbox-rounded max-xs:w-fit max-md:h-[56px]"
                      key={item.value}>
                      <input
                        type="checkbox"
                        checked={sort?.value === item.value}
                        id={item.value.toString()}
                        onChange={() => {
                          changeFilterHandler(() => setSort(item));
                        }}
                      />
                      <label
                        htmlFor={item.value.toString()}
                        className="flex flex-col gap-[5px]">
                        <p className="text-[15px] leading-none whitespace-nowrap">
                          {item.title}
                        </p>
                        <span className="text-[11px] leading-none">
                          {item.subtitle}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="leading-none font-medium">Price</p>
              <div className="flex gap-[8px]">
                <TextField
                  type="number"
                  label="Min. price, €"
                  className="border-grey-600 border w-full"
                  step={50000}
                  min={0}
                  value={minPriceFilter}
                  onChange={e => {
                    changeFilterHandler(() =>
                      setMinPriceDebounced.current(e.target.value),
                    );
                    setMinPriceFilter(e.target.value);
                  }}
                />
                <TextField
                  type="number"
                  label="Max. price, €"
                  className="border-grey-600 border w-full"
                  step={50000}
                  value={maxPriceFilter}
                  onChange={e => {
                    changeFilterHandler(() =>
                      setMaxPriceDebounced.current(e.target.value),
                    );
                    setMaxPriceFilter(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="leading-none font-medium">Bedrooms</p>
              <div className="flex gap-[8px]">
                {bedroomOptions.map(item => {
                  return (
                    <div
                      className="checkbox-rounded max-md:h-[56px]"
                      key={item.value}>
                      <input
                        type="checkbox"
                        checked={bedrooms?.value === item.value}
                        id={`${item.value.toString()}-bedroom`}
                        onChange={() => {
                          changeFilterHandler(() => setBedrooms(item));
                        }}
                      />
                      <label
                        htmlFor={`${item.value.toString()}-bedroom`}
                        className="flex flex-col h-full justify-center">
                        <p className="text-[15px] leading-none">{item.title}</p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="leading-none font-medium">Bathrooms</p>
              <div className="flex gap-[8px]">
                {bathroomOptions.map(item => {
                  return (
                    <div
                      className="checkbox-rounded max-md:h-[56px]"
                      key={item.value}>
                      <input
                        type="checkbox"
                        checked={bathrooms?.value === item.value}
                        id={`${item.value.toString()}-bathroom`}
                        onChange={() => {
                          changeFilterHandler(() => setBathrooms(item));
                        }}
                      />
                      <label
                        htmlFor={`${item.value.toString()}-bathroom`}
                        className="flex flex-col h-full justify-center">
                        <p className="text-[15px] leading-none">{item.title}</p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            className={`btn-primary w-full h-[57px] pt-0 relative${
              countResults < 1 || isFetching
                ? ' bg-loading pointer-events-none'
                : ''
            }`}
            onClick={showResultsHandler}>
            {isFetching ? (
              <LoaderIcon
                width={24}
                height={24}
                className="animate-spin absolute top-0 m-auto left-0 bottom-0 right-0"
              />
            ) : (
              <span className="absolute top-0 m-auto left-0 bottom-0 right-0 h-fit w-fit max-md:font-medium">
                Show {countResults ? countResults : ''} Results
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersDesktop;
