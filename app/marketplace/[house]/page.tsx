'use client';
import {Property} from '@/app/@types/protobuf-types';
import AvailableApartments from '@/app/components/AvailableApartments';
import Gallery from '@/app/components/Gallery';
import HomeProperties from '@/app/components/HomeProperties';
import Mapbox from '@/app/components/Map';
import MoveInDay from '@/app/components/MoveInDay';
import Ownership from '@/app/components/Ownership';
import Page from '@/app/components/Page';
import Places from '@/app/components/Places';
import ProductCrumbs from '@/app/components/ProductCrumbs';
import ProductInfo from '@/app/components/ProductInfo';
import ProductMobileNav from '@/app/components/ProductMobileNav';
import ProductTouchPlate from '@/app/components/ProductTouchPlate';
import DeployableText from '@/app/components/ui/DeployableText';
import Title from '@/app/components/ui/Title';
import BaseLayout from '@/app/layouts/BaseLayout';
import {setModalPayload} from '@/app/store/actions/modal';
import {useGetHousesQuery} from '@/app/store/reducers/marketplace/marketplace.api';
import {useGetPropertyQuery} from '@/app/store/reducers/property/property.api';
import {
  useGetAreaPostsQuery,
  useGetFeaturesQuery,
  useGetLocationsQuery,
} from '@/app/store/reducers/services/services.api';
import breakpoints from '@/breakpoints';
import {ShareIcon} from '@/icons/Share';
import {
  getArea,
  getCity,
  getCountry,
  getFeatures,
} from '@/utils/getLocationProps';
import {skipToken} from '@reduxjs/toolkit/dist/query';
import {map, max, min} from 'lodash';
import {NextPage} from 'next';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useDispatch} from 'react-redux';
import {useMediaQuery} from 'react-responsive';

const HousePage: NextPage = () => {
  const lessXL = useMediaQuery({query: `(max-width: ${breakpoints.xl}px)`});
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const params = useParams();
  const [pageIndex, setPageIndex] = useState<number>();
  const {data: propertyData, isLoading} = useGetPropertyQuery({
    id: Number(params['house']),
  });
  const {data: marketplaceData} = useGetHousesQuery({});
  const {data: locationsData} = useGetLocationsQuery({});
  const {data: featuresData} = useGetFeaturesQuery({});
  const {data: areaData} = useGetAreaPostsQuery(
    propertyData
      ? {areaId: propertyData?.property?.address?.areaId}
      : skipToken,
  );
  const dispatch = useDispatch();
  const [prevHouse, setPrevHouse] = useState<Property>();
  const [nextHouse, setNextHouse] = useState<Property>();
  const [crumbsLoading, setCrumbsLoading] = useState<boolean>(true);

  const annualPercent = {
    min: propertyData?.property?.children
      ? Number(
          min(map(propertyData?.property?.children, 'annualIncome.percent')),
        )
      : 0,
    max: propertyData?.property?.children
      ? Number(
          max(map(propertyData?.property?.children, 'annualIncome.percent')),
        )
      : 0,
  };

  const pageCrumbs = {
    prev: {
      text: prevHouse ? 'Prev' : 'Marketplace',
      link: prevHouse
        ? `/marketplace/${
            prevHouse?.snippet?.apartment ? 'house/' : ''
          }${prevHouse?.id?.toString()}`
        : '/marketplace',
    },
    next: {
      text: nextHouse ? 'Next' : 'Marketplace',
      link: nextHouse
        ? `/marketplace/${
            nextHouse?.snippet?.apartment ? 'house/' : ''
          }${nextHouse?.id?.toString()}`
        : '/marketplace',
    },
    count: {
      from: pageIndex ? pageIndex : 0,
      total: marketplaceData ? marketplaceData.total : 0,
      text: 'properties',
    },
  };

  const openContact = () => {
    dispatch(setModalPayload('contact', true));
  };

  useEffect(() => {
    if (marketplaceData && propertyData) {
      const items = marketplaceData?.items;
      items?.forEach((item: Property, index: number) => {
        if (item.id === propertyData?.property?.id) {
          if (items[index - 1]) setPrevHouse(items[index - 1]);
          if (items[index + 1]) setNextHouse(items[index + 1]);
          setPageIndex(index + 1);
        }
      });
      setTimeout(() => {
        setCrumbsLoading(false);
      }, 400);
    }
  }, [marketplaceData, propertyData]);

  if (isLoading) return <Page>Loading...</Page>;

  return (
    <>
      <BaseLayout>
        {!lessLG && <ProductCrumbs loading={crumbsLoading} {...pageCrumbs} />}
        <Page>
          <div className="mb-8 flex min-lg:items-center justify-between max-sm:mb-sm max-lg:flex-col max-lg:gap-sm">
            {lessLG && <ProductMobileNav backLink="/marketplace" />}
            <Title>{propertyData?.property?.content?.name}</Title>
            {!lessLG ? (
              <button>
                <ShareIcon width={18} height={23} />
              </button>
            ) : (
              <p className="text-p leading-none">
                Move in day:{' '}
                <MoveInDay
                  month={Number(
                    propertyData?.property?.snippet?.complex?.endOfConstruction
                      ?.month,
                  )}
                  year={Number(
                    propertyData?.property?.snippet?.complex?.endOfConstruction
                      ?.year,
                  )}
                />
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:gap-md lg:grid-cols-1 xl:grid-cols-[1fr_530px] xl:gap-[56px]">
            <div className="grid gap-md md:gap-lg">
              {propertyData?.property?.content?.images && (
                <Gallery items={propertyData?.property?.content?.images} />
              )}
              {propertyData?.property?.children && (
                <div className="grid gap-[10px] md:gap-[20px]">
                  <b className="text-[18px] md:text-[32px] font-medium">
                    Available apartments
                  </b>
                  <AvailableApartments
                    items={propertyData?.property?.children}
                  />
                </div>
              )}
              <div className="grid gap-[10px] md:gap-[20px]">
                <b className="text-[18px] md:text-[32px] font-medium">
                  About Complex
                </b>
                {propertyData?.property?.content?.description &&
                  propertyData?.property?.content?.description !== '' && (
                    <DeployableText
                      text={propertyData?.property?.content?.description}
                    />
                  )}
                {featuresData && (
                  <HomeProperties
                    items={getFeatures(
                      featuresData.complex,
                      propertyData?.property?.snippet?.complex?.features
                        ?.notionIds,
                    )}
                  />
                )}
              </div>
              <div className="grid gap-[10px] md:gap-[20px]">
                <b className="text-[18px] md:text-[32px] font-medium">
                  Complex Details
                </b>
                <div className="w-full">
                  {propertyData?.property?.content?.name && (
                    <div className="flex w-full justify-between border-b border-grey-300 pb-sm gap-md">
                      <span className="text-p">Name</span>
                      <span>{propertyData?.property?.content?.name}</span>
                    </div>
                  )}
                  <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                    <span className="text-p">Completed</span>
                    <span>Completed</span>
                  </div>
                  <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                    <span className="text-p">Year</span>
                    <span>2021</span>
                  </div>
                  <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                    <span className="text-p">Levels</span>
                    <span>5</span>
                  </div>
                  <div className="flex w-full justify-between pt-sm gap-md">
                    <span className="text-p">Security</span>
                    <span className="text-right max-md:grid">
                      <span>24 Hour Security, </span>
                      <span>Gated Complex, </span>
                      <span>Alarm System</span>
                    </span>
                  </div>
                </div>
              </div>
              <Ownership />
              <div className="grid gap-[10px] md:gap-[20px]">
                <b className="text-[18px] md:text-[32px] font-medium">
                  Location
                </b>
                {locationsData && (
                  <DeployableText
                    text={
                      getArea(
                        locationsData,
                        propertyData?.property?.address?.areaId,
                      )?.description
                    }
                  />
                )}
                {propertyData?.property?.coordinates && (
                  <Mapbox location={propertyData?.property?.coordinates} />
                )}
              </div>
              {areaData && <Places items={areaData?.items} />}
              {/* <div className="w-full border-t-[1px] border-grey-400 pt-md">
              <Developer />
            </div> */}
            </div>
            {!lessXL && (
              <div className="sticky top-[100px] flex h-fit flex-col gap-md">
                <div className="flex flex-col gap-md rounded-md bg-grey-500 p-md">
                  <ProductInfo
                    isCard={false}
                    minPrice={Number(propertyData?.property?.data?.price)}
                    annualPercent={annualPercent}
                  />
                  <button className="btn-primary w-full" onClick={openContact}>
                    Get in Touch
                  </button>
                  <div className="flex flex-col gap-[8px]">
                    {locationsData && (
                      <span className="underline">
                        {propertyData?.property?.address?.street &&
                          (propertyData?.property?.address?.street, ' ')}
                        {propertyData?.property?.address?.houseNumber &&
                          (propertyData?.property?.address?.houseNumber, ' ')}
                        {
                          getCity(
                            locationsData,
                            propertyData?.property?.address?.cityId,
                          )?.name
                        }
                        ,{' '}
                        {
                          getCountry(
                            locationsData,
                            propertyData?.property?.address?.countryId,
                          )?.name
                        }
                        .
                      </span>
                    )}
                    {propertyData?.property?.snippet?.complex
                      ?.endOfConstruction && (
                      <p className="text-p flex gap-[5px]">
                        Move in day:{' '}
                        {isLoading ? (
                          <Skeleton count={1} width={120} height={16} />
                        ) : (
                          <MoveInDay
                            month={Number(
                              propertyData?.property?.snippet?.complex
                                ?.endOfConstruction?.month,
                            )}
                            year={Number(
                              propertyData?.property?.snippet?.complex
                                ?.endOfConstruction?.year,
                            )}
                          />
                        )}
                      </p>
                    )}
                  </div>
                </div>
                {/* <Advantages /> */}
              </div>
            )}
          </div>
        </Page>
      </BaseLayout>
      {lessLG && <ProductTouchPlate />}
    </>
  );
};

export default HousePage;
