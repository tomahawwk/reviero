'use client';
import BlueLayout from '@/app/layouts/BlueLayout';
import {NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';

const MobileApp: NextPage = () => {
  return (
    <BlueLayout>
      <div className="bg-lightBlue w-full pt-xl pb-[100px] flex flex-col items-center">
        <div className="flex flex-col items-center gap-xl">
          <div className="flex flex-col items-center gap-md">
            <div className="text-[60px] font-medium leading-none">
              Download Reviero
            </div>
            <p className="text-[18px] leading-none">
              Reserve listings and discover net profit, taxes, fees and mortgage
              options in our App
            </p>
          </div>
          <div className="grid grid-cols-[300px_300px] w-full gap-[32px] justify-center">
            <div className="rounded-md bg-darkBlue p-lg text-white flex flex-col items-center gap-md">
              <span className="text-sm leading-none">Mobile</span>
              <div className="text-[40px] leading-none text-center">Apple</div>
              <p className="text-sm text-center">
                Minimum Requirements (Version 22.13.74) Requires iOS 12.0 or
                newer
              </p>
              <Image
                src="/images/apple-qr.png"
                width={160}
                height={160}
                alt="apple-qr"
                className="rounded-xs"
              />
              <Link href="#" className="relative block h-[60px] w-[180px]">
                <img src="/images/app-store.png" className="h-full w-full" />
              </Link>
            </div>
            <div className="rounded-md bg-darkBlue p-lg text-white flex flex-col items-center gap-md">
              <span className="text-sm leading-none">Mobile</span>
              <div className="text-[40px] leading-none text-center">
                Android
              </div>
              <p className="text-sm text-center">
                Minimum Requirements (Version 2.23.7.14) Android OS 4.1 or above
              </p>
              <Image
                src="/images/qr.png"
                width={160}
                height={160}
                alt="apple-qr"
                className="rounded-xs"
              />
              <Link href="#" className="relative block h-[60px] w-[180px]">
                <img src="/images/google-play.png" className="h-full w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BlueLayout>
  );
};

export default MobileApp;
