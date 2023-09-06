'use client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Timeline from '@/app/components/Timeline';
import dynamic from 'next/dynamic';
import {FC, PropsWithChildren} from 'react';

const MobileMenu = dynamic(() => import('@/app/components/MobileMenu'), {
  ssr: false,
});

const ContactPopup = dynamic(
  () => import('@/app/components/ContactPopups/ContactPopup'),
  {
    ssr: false,
  },
);

const ChatPopup = dynamic(
  () => import('@/app/components/ContactPopups/ChatPopup'),
  {
    ssr: false,
  },
);

const TalkPopup = dynamic(
  () => import('@/app/components/ContactPopups/TalkPopup'),
  {
    ssr: false,
  },
);

const TourPopup = dynamic(
  () => import('@/app/components/ContactPopups/TourPopup'),
  {
    ssr: false,
  },
);

const Filters = dynamic(() => import('@/app/components/Filters'), {
  ssr: false,
});

const BaseLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* Modals */}
      <MobileMenu />
      <Filters />
      <Timeline />
      <ContactPopup />
      <ChatPopup />
      <TalkPopup />
      <TourPopup />
      {/**/}
    </>
  );
};

export default BaseLayout;
