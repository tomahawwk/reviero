const setFilterParamsPair = (filters: any, params: [], setParams: (filters: []) => void) => {
  const currentFilters: any = [...filters];
  params.forEach((param: any) => {
    if (
      Object.keys(param)[0] !== Object.keys(filters[0])[0] &&
      Object.keys(param)[0] !== Object.keys(filters[1])[0]
    )
      currentFilters.push(param);
  });
  setParams(currentFilters);
};

export default setFilterParamsPair;
