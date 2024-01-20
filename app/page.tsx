import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layout';

export default function Page() {
  return (
    <RootLayout>
      <h1>Hello, Next.js!</h1>
    </RootLayout>
  );
}