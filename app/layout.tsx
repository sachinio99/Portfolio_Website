import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Path: app/page.tsx
import RootLayout from "./layout";
export default function Page() {

  return (
    <ChakraProvider>
      <h1>Hello, Next.js!</h1>
    </ChakraProvider>
  )
}
// Path: app/layout.tsx