import { Text } from '@/components/atoms'
import Image from 'next/image'
import React from 'react'

const PartnerCard = () => {
  return (
    <div className='flex items-center gap-16'>
        <div className=''>
            <Image src={"/images/logo1.png"} alt='logo image'width={100} height={100} className='block'/>

        </div>


        <div className='flex flex-col gap-2'>
            <Text  text='Best Law Firm' color='' fontSize={"large"} fontWeight={"bold"}/>
            <Text  text='45 Years of Experience' color='' fontSize={"small"} fontWeight={"400"}/>

        </div>
    </div>
  )
}

export default PartnerCard