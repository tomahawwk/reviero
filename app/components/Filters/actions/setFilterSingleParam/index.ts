const setFilterSingleParam = (
  name: string,
  value: any,
  params: [],
  setParams: (filters: []) => void,
) => {
  const currentFilters: any = [],
    filter: any = {};
  filter[name] = value;
  currentFilters.push(filter);
  params.forEach((el: any) => {
    if (Object.keys(el).toString() !== name) {
      currentFilters.push(el);
    }
  });
  setParams(currentFilters);
};

export default setFilterSingleParam;
