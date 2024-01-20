import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './RootLayout';

export default function Page() {
  return (
    <ChakraProvider>
      <RootLayout>
        <h1>Hello, Next.js!</h1>
      </RootLayout>
    </ChakraProvider>
  );
}