export const concatParams = (params: any) => {
  let string = '';
  params.forEach((item: string, index: number) => {
    string += `${index === 0 ? '?' : '&'}${Object.keys(item)[0]}=${
      Object.values(item)[0]
    }`;
  });
  return string;
};
