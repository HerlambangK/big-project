"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import SectionContact from './home/SectionContact'
import SectionFeature from './home/SectionFeature'
import SectionHeader from './home/SectionHeader'
import SectionPricing from './home/SectionPricing'
import SectionVideo from './home/SectionVideo'

const Page = () => {

  return (
    <SessionProvider>
      <div className='container'>
        <SectionHeader />
        {/* <SectionVideo /> */}
        <SectionFeature />
        {/* <SectionPricing /> */}
        <SectionPricing />
        <SectionContact />
      </div>
    </SessionProvider>
  )
}

export default Page