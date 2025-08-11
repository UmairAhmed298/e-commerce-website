

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const UserPageLayout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default UserPageLayout