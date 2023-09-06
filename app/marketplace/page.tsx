'use client';
import HouseCard from '@/app/components/Card/HouseCard';
import PropertyCard from '@/app/components/Card/PropertyCard';
import SkeletonCard from '@/app/components/Card/Skeleton';
import CardItems from '@/app/components/CardItems';
import Page from '@/app/components/Page';
import FilterButtonDesktop from '@/app/components/ui/FilterButton/desktop';
import Title from '@/app/components/ui/Title';
import BaseLayout from '@/app/layouts/BaseLayout';
import {setModalPayload} from '@/app/store/actions/modal';
import {getFiltersSelector} from '@/app/store/reducers/filters/filters';
import {
  useFilterHousesMutation,
  useGetHousesQuery,
} from '@/app/store/reducers/marketplace/marketplace.api';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import {NextPage} from 'next';
import {useEffect, useRef, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {Property} from '../@types/protobuf-types';
import NotFound from './not-found';

const fetchLimit = 8;

const Marketplace: NextPage = () => {
  const [fetchOffset, setFetchOffset] = useState<number>(0);
  const {filterParams} = useSelector(getFiltersSelector);
  const [params, setParams] = useState<any>({
    limit: fetchLimit,
    offset: fetchOffset,
    ...filterParams,
  });
  const [filterHouses] = useFilterHousesMutation();
  const [isMounted, setMounted] = useState<boolean>(true);
  const {data, isLoading, error} = useGetHousesQuery(params);
  const {filters: filtersModal} = useSelector(getModalSelector);
  const [hasElapsed, setHasElapsed] = useState<boolean>(true);
  const dispatch = useDispatch();
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const [cards, setCards] = useState<Property[]>([]);
  const skeletonCards = [];
  const afterScrollCards = [];

  const openFilters = () => {
    dispatch(setModalPayload('filters', !filtersModal.open));
  };

  const scrollHandler = () => {
    let paramsObject = {};
    filterParams.forEach((param: any) => {
      Object.assign(paramsObject, param);
    });
    filterHouses({
      limit: fetchLimit,
      offset: fetchOffset + 8,
      ...paramsObject,
    }).then((data: any) => {
      if (data?.data?.items?.length) {
        setCards(prevState => [...prevState, ...data.data.items]);
        setFetchOffset(fetchOffset + 8);
      }
    });
  };

  const refreshCards = (cardsParams: []) => {
    setCards([]);
    setFetchOffset(0);
    setTimeout(() => {
      setHasElapsed(false);
    }, 10);
    setTimeout(() => {
      setParams(cardsParams);
    }, 200);
    setTimeout(() => {
      setHasElapsed(true);
    }, 600);
  };

  useEffect(() => {
    if (data) {
      setCards(data.items);
      if (isMounted) {
        setMounted(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (isLoading) {
      timeout.current && clearTimeout(timeout.current);
      setHasElapsed(false);
      timeout.current = setTimeout(() => {
        setHasElapsed(true);
      }, 900);
    }
  }, [900, isLoading]);

  useEffect(() => {
    if (filterParams.length) {
      let params: any = {
        limit: fetchLimit,
        offset: 0,
      };
      filterParams?.forEach((item: any) => {
        params = {...params, ...item};
      });
      refreshCards(params);
    } else if (!filterParams.length && !isMounted) {
      let params: any = {
        limit: fetchLimit,
        offset: 0,
      };
      refreshCards(params);
    }
  }, [filterParams]);

  useEffect(() => {
    if (!filtersModal.open && data) {
      setMounted(false);
    }
  }, [filtersModal]);

  for (let i = 1; i <= fetchLimit; i++) {
    skeletonCards.push(<SkeletonCard key={i} />);
  }

  for (let i = 1; i <= 4; i++) {
    afterScrollCards.push(<SkeletonCard key={i} />);
  }

  return (
    <BaseLayout>
      <Page>
        <div className="mb-8 flex items-center justify-between max-sm:mb-sm">
          <Title>Marketplace</Title>
          <FilterButtonDesktop onClick={openFilters} filters={filterParams} />
        </div>
        {!hasElapsed ? (
          <CardItems>{skeletonCards}</CardItems>
        ) : error ? (
          <NotFound />
        ) : (
          <InfiniteScroll
            dataLength={cards.length}
            next={scrollHandler}
            hasMore={true}
            loader={''}
            endMessage={<p>No more properties to load.</p>}>
            <CardItems>
              {cards?.map((item: any) =>
                item?.snippet?.apartment ? (
                  <PropertyCard {...item} key={item.id} />
                ) : item?.snippet?.complex ? (
                  <HouseCard {...item} key={item.id} />
                ) : null,
              )}
            </CardItems>
          </InfiniteScroll>
        )}
      </Page>
    </BaseLayout>
  );
};

export default Marketplace;
