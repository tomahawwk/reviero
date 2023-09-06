import {Providers} from '@/app/redux/provider';
import {Metadata} from 'next';
import {FC, PropsWithChildren} from 'react';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css'
import './globals.css';
import 'swiper/css';

export const metadata: Metadata = {
  title: {
    default: 'Reviero',
    template: 'Reviero',
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
};

const RootLayout: FC<PropsWithChildren> = function ({children}) {
  return (
    <Providers>
      <html lang="en">
        <body className="flex min-h-screen flex-col font-grotesque text-black text-md md:text-lg">
          {children}
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
