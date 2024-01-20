
import React, { createContext, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type RootLayoutProps = {
  children: ReactNode;
};

export const MyContext = createContext<string>('');

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <MyContext.Provider value="Example Value">
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </MyContext.Provider>
  );
}
