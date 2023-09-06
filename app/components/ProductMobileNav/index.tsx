import {ArrowIcon} from '@/icons/Arrow';
import {ShareIcon} from '@/icons/Share';
import Link from 'next/link';
import {FC} from 'react';
import {IProductMobileNav} from './types';

const ProductMobileNav: FC<IProductMobileNav> = ({backLink}) => {
  return (
    <div className="flex justify-between w-full">
      <Link href={backLink}>
        <ArrowIcon width={20} height={20} className="text-black rotate-90" />
      </Link>
      <Link href="#">
        <ShareIcon width={20} height={20} className="text-black" />
      </Link>
    </div>
  );
};

export default ProductMobileNav;
