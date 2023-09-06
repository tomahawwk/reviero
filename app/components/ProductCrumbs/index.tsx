import {ArrowIcon} from '@/icons/Arrow';
import Link from 'next/link';
import {FC} from 'react';
import Skeleton from 'react-loading-skeleton';
import {IProductCrumbs} from './types';

const ProductCrumbs: FC<IProductCrumbs> = ({next, prev, count, loading}) => {
  return (
    <div className="border-b-[1px] border-grey-400 w-full">
      <div className="wrapper grid grid-cols-3">
        <Link
          href={prev.link}
          className="flex gap-[8px] items-center font-medium py-[5px]">
          <ArrowIcon
            width={12}
            height={8}
            className="text-black rotate-90 mt-[-2px]"
          />
          {loading ? (
            <Skeleton count={1} width={120} height={16} />
          ) : (
            <span>{prev.text}</span>
          )}
        </Link>
        <div className="justify-self-center flex items-center text-p">
          {loading ? (
            <Skeleton count={1} width={120} height={16} />
          ) : (
            <>
              {count.from} of {count.total} {count.text}
            </>
          )}
        </div>
        <Link
          href={next.link}
          className="flex gap-[8px] items-center font-medium py-[5px] justify-self-end">
          {loading ? (
            <Skeleton count={1} width={120} height={16} />
          ) : (
            <span>{next.text}</span>
          )}
          <ArrowIcon
            width={12}
            height={8}
            className="text-black rotate-[-90deg] mt-[-2px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductCrumbs;
