const getNoun = (
  number: number,
  one: string,
  two: string,
  five: string,
): string =>
  ((n: number) => (
    (n %= 100),
    n >= 5 && n <= 20
      ? five
      : ((n %= 10), n === 1 ? one : n >= 2 && n <= 4 ? two : five)
  ))(Math.abs(number));

export default getNoun;
