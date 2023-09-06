'use client';
import {FC, PropsWithChildren} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const BlueLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header isStatic />
      {children}
      <Footer />
    </>
  );
};

export default BlueLayout;
