import React, { createContext, ReactNode, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type RootLayoutProps = {
  children: ReactNode;
};

export const MyContext = createContext<string>('');

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Code to run on the client-side
      console.log('Running on the client');
    }
  }, []);

  return (
    <MyContext.Provider value="Example Value">
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </MyContext.Provider>
  );
}