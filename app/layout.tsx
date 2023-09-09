'use client';
import {Providers} from '@/redux/provider';
import {Metadata} from 'next';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';
import 'swiper/css';

export const metadata: Metadata = {
  title: {
    default: 'Reviero',
    template: 'Reviero',
  },
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-grotesque text-black text-md md:text-lg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
