'use client';
import {Property} from '@/app/@types/protobuf-types';
import ApartmentProperties from '@/app/components/ApartmentProperties';
import Gallery from '@/app/components/Gallery';
import HomeProperties from '@/app/components/HomeProperties';
import Mapbox from '@/app/components/Map';
import MoveInDay from '@/app/components/MoveInDay';
import Ownership from '@/app/components/Ownership';
import Page from '@/app/components/Page';
import Places from '@/app/components/Places';
import ProductCrumbs from '@/app/components/ProductCrumbs';
import ProductIncomeCalculator from '@/app/components/ProductIncomeCalculator';
import ProductInfo from '@/app/components/ProductInfo';
import ProductMobileNav from '@/app/components/ProductMobileNav';
import PurchaseDetails from '@/app/components/PurchaseDetails';
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
import {getCity, getCountry, getFeatures} from '@/utils/getLocationProps';
import {skipToken} from '@reduxjs/toolkit/dist/query';
import {NextPage} from 'next';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useDispatch} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {pageCrumbs} from './crumbs';

const PropertyPage: NextPage = () => {
  const params = useParams();
  const lessXL = useMediaQuery({query: `(max-width: ${breakpoints.xl}px)`});
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {data: marketplaceData} = useGetHousesQuery({});
  const {data: locationsData} = useGetLocationsQuery({});
  const {data: propertyData, isLoading} = useGetPropertyQuery({
    id: Number(params['apartment']),
  });
  const {data: complexData} = useGetPropertyQuery(
    propertyData ? {id: Number(propertyData?.property?.parent?.id)} : skipToken,
  );
  const {data: areaData} = useGetAreaPostsQuery(
    propertyData
      ? {areaId: propertyData?.property?.address?.areaId}
      : skipToken,
  );
  const dispatch = useDispatch();
  const {data: featuresData} = useGetFeaturesQuery({});
  const [pageIndex, setPageIndex] = useState<number>();
  const [prevApartment, setPrevApartment] = useState<Property>();
  const [nextApartment, setNextApartment] = useState<Property>();
  const [crumbsLoading, setCrumbsLoading] = useState<boolean>(true);
  const [isSingleProperty, setIsSingleProperty] = useState<boolean>();
  const [crumbs, setCrumbs] = useState<any>();

  const apartProperties = [
    {
      id: 1,
      icon: '/icons/bedroom.svg',
      text: propertyData?.property?.data?.bedrooms?.toString(),
    },
    {
      id: 2,
      icon: '/icons/bathroom.svg',
      text: propertyData?.property?.data?.bathrooms?.toString(),
    },
    {
      id: 3,
      icon: '/icons/meters.svg',
      text: '56m²',
    },
    {
      id: 4,
      text: 'Floor: 3/4',
    },
  ];

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  useEffect(() => {
    if (propertyData && complexData) {
      setIsSingleProperty(Number(complexData?.property?.children?.length) <= 1);
    }
  }, [propertyData, complexData]);

  useEffect(() => {
    const items = isSingleProperty
      ? marketplaceData?.items
      : complexData?.property?.children;
    items?.forEach((item: Property, index: number) => {
      if (item.id === propertyData?.property?.id) {
        if (items[index - 1]) setPrevApartment(items[index - 1]);
        if (items[index + 1]) setNextApartment(items[index + 1]);
        setPageIndex(index + 1);
      }
    });
  }, [isSingleProperty]);

  const openContact = () => {
    dispatch(setModalPayload('contact', true));
  };

  useEffect(() => {
    if (isSingleProperty !== undefined) {
      setCrumbs(
        pageCrumbs(
          prevApartment,
          isSingleProperty,
          complexData,
          nextApartment,
          pageIndex,
          marketplaceData,
        ),
      );
      setTimeout(() => {
        setCrumbsLoading(false);
      }, 400);
    }
  }, [pageIndex]);

  if (isLoading) return <Page>Loading...</Page>;

  return (
    <BaseLayout>
      {!lessLG && crumbs && (
        <ProductCrumbs {...crumbs} loading={crumbsLoading} />
      )}
      <Page>
        <div className="mb-8 flex lg:items-center justify-between max-sm:mb-sm max-lg:flex-col max-lg:gap-md">
          {lessLG && (
            <ProductMobileNav
              backLink={`/marketplace/${propertyData?.property?.parent?.id}`}
            />
          )}
          <div className="flex flex-col gap-[5px]">
            <Title>{propertyData?.property?.content?.name}</Title>
            {lessLG &&
              propertyData?.property?.snippet?.complex?.endOfConstruction && (
                <>
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
                  {apartProperties && (
                    <ApartmentProperties items={apartProperties} />
                  )}
                </>
              )}
          </div>
          {!lessLG && (
            <button>
              <ShareIcon width={18} height={23} />
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:gap-md xl:grid-cols-[1fr_530px] xl:gap-[56px]">
          <div className="grid gap-md md:gap-lg">
            {propertyData?.property?.content?.images && (
              <Gallery
                items={propertyData?.property?.content?.images}
                apartmentView
              />
            )}
            {lessLG && (
              <ProductInfo
                isCard={false}
                showPercent
                minPrice={Number(propertyData?.property?.data?.price)}
                annualPercent={{
                  min: Number(propertyData?.property?.annualIncome?.percent),
                }}
              />
            )}
            <ProductIncomeCalculator />
            <div className="grid gap-[10px] md:gap-[20px]">
              <b className="text-[18px] md:text-[32px] font-medium">
                Purchase Details
              </b>
              <PurchaseDetails />
            </div>
            <div className="grid gap-[10px] md:gap-[20px]">
              <b className="text-[18px] md:text-[32px] font-medium">
                About Apartment
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
                    featuresData.apartment,
                    propertyData?.property?.snippet?.apartment?.features
                      ?.notionIds,
                  )}
                  isList
                />
              )}
            </div>
            <div className="grid gap-[10px] md:gap-[20px]">
              <b className="text-[18px] md:text-[32px] font-medium">
                Apartment Details
              </b>
              <div className="w-full">
                <div className="flex w-full justify-between border-b border-grey-300 pb-sm gap-md">
                  <span className="text-p">Apartment size</span>
                  <span>80 sq.m</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Floor No</span>
                  <span>5</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Condition</span>
                  <span>Excellent</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Furniture</span>
                  <span>Fully Furnished</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">View</span>
                  <span>Garden view, Sea</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Kitchen</span>
                  <span>Fully Fitted</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Garden</span>
                  <span>Private</span>
                </div>
                <div className="flex w-full justify-between border-b border-grey-300 py-sm gap-md">
                  <span className="text-p">Terrace</span>
                  <span>146 sq.m</span>
                </div>
                <div className="flex w-full justify-between pt-sm gap-md">
                  <span className="text-p">Climate control</span>
                  <span className="text-right max-md:grid">
                    Air Conditioning, U/F Heating
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-[10px] md:gap-[20px]">
              <b className="text-[18px] md:text-[32px] font-medium">
                About Complex
              </b>
              {propertyData?.property?.parent?.content?.description &&
                propertyData?.property?.parent?.content?.description !== '' && (
                  <DeployableText
                    text={propertyData?.property?.parent?.content?.description}
                  />
                )}
              {featuresData && (
                <HomeProperties
                  items={getFeatures(
                    featuresData.complex,
                    propertyData?.property?.parent?.snippet?.complex?.features
                      ?.notionIds,
                  )}
                  isList
                />
              )}
            </div>
            <div className="grid gap-[10px] md:gap-[20px]">
              <b className="text-[18px] md:text-[32px] font-medium">
                Complex Details
              </b>
              <div className="w-full">
                {/* {houseData?.name && (
                  <div className="flex w-full justify-between border-b border-grey-300 pb-sm gap-md">
                    <span className="text-p">Name</span>
                    <span>{houseData.name}</span>
                  </div>
                )} */}
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
              <b className="text-[18px] md:text-[32px] font-medium">Location</b>
              {/* <DeployableText text={propertyDescription} /> */}
              {propertyData?.property?.coordinates && (
                <Mapbox location={propertyData?.property?.coordinates} />
              )}
            </div>
            {areaData && <Places items={areaData.items} />}
            {/* <div className="w-full border-t-[1px] border-grey-400 pt-md">
              <Developer />
            </div> */}
          </div>
          {!lessXL && (
            <div className="sticky top-[100px] flex h-fit flex-col gap-md">
              <div className="flex flex-col gap-sm rounded-md bg-grey-500 p-md">
                <ProductInfo
                  isCard={false}
                  minPrice={Number(propertyData?.property?.data?.price)}
                  annualPercent={{
                    min: Number(propertyData?.property?.annualIncome?.percent),
                  }}
                />
                {apartProperties && (
                  <ApartmentProperties isLarge items={apartProperties} />
                )}
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
                        ).name
                      }
                      ,{' '}
                      {
                        getCountry(
                          locationsData,
                          propertyData?.property?.address?.countryId,
                        ).name
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
                <button className="btn-primary w-full" onClick={openContact}>
                  Get in Touch
                </button>
              </div>
              {/* <Advantages /> */}
            </div>
          )}
        </div>
      </Page>
    </BaseLayout>
  );
};

export default PropertyPage;
