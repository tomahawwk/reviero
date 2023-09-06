import {DateTime} from 'luxon';
import {FC, useEffect, useState} from 'react';
import {IMoveInDay} from './types';

const MoveInDay: FC<IMoveInDay> = ({year, month}) => {
  const [format, setFormat] = useState<string>('');
  useEffect(() => {
    setFormat(DateTime.local(year, month).toFormat('MMMM yyyy'));
  }, []);

  return <span className="font-medium text-black">{format}</span>;
};

export default MoveInDay;
