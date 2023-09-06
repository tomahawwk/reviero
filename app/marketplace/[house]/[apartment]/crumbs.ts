export const pageCrumbs = (
  prevApartment: any,
  isSingleProperty: boolean,
  complexData: any,
  nextApartment: any,
  pageIndex: any,
  housesData: any,
) => {
  return {
    prev: {
      text: prevApartment
        ? 'Prev'
        : isSingleProperty && !prevApartment
        ? 'Marketplace'
        : 'About Complex',
      link: prevApartment
        ? `/marketplace/${
            !isSingleProperty ? `${complexData?.property?.id.toString()}/` : ''
          }${prevApartment.id.toString()}`
        : `/marketplace/${
            isSingleProperty ? '' : complexData?.property?.id.toString()
          }`,
    },
    next: {
      text: nextApartment
        ? 'Next'
        : isSingleProperty && !nextApartment
        ? 'Marketplace'
        : 'About Complex',
      link: nextApartment
        ? `/marketplace/${
            !isSingleProperty ? `${complexData?.property?.id.toString()}/` : ''
          }${nextApartment.id.toString()}`
        : `/marketplace/${
            isSingleProperty ? '' : complexData?.property?.id.toString()
          }`,
    },
    count: {
      from: pageIndex ? pageIndex : 0,
      total:
        isSingleProperty && housesData
          ? housesData.items.length
          : complexData?.property
          ? complexData?.property?.children.length
          : 0,
      text: isSingleProperty ? 'properties' : 'apartments',
    },
  };
};
