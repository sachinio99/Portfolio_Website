import React, { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};

export default RootLayout;