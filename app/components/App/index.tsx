'use client'

import React from 'react'

import { ThemeProvider } from 'next-themes'

import Header from '../Header'
import Footer from '../Footer'

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App