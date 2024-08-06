import React from 'react'
import { useState } from 'react'
import NoActivity from './NoActivity'
import InvestmentActivityData from './InvestmentActivityData'

const ActiveInvestments = () => {
    const [active , setActive] = useState(["hello"])

  return (
    <div className='w-full h-full'>
        {  active.length ===  0 && (
      <NoActivity/>
        )}
        
      {
        active.length > 0 && (
            <InvestmentActivityData/>
        )
      }


    </div>
  )
}

export default ActiveInvestments