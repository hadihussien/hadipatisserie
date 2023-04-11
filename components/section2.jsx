import React from 'react'
import Image from 'next/image'
import bg4 from "../public/assets/bg-04.png"

export default function section2() {
    return (
        <div className='section2 relative overflow-hidden'>
            <div className='flex lg:bg-fixed relative'>
                <div className="sec1 h-full w-full lg:bg-fixed overflow-hidden basis-1/2"></div>
                <Image src={bg4} className="z-10 absolute"></Image>
            </div>
            <div className='absolute flex z-20 text-center  flex-col justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-4xl'>Always</p>
                <h3 className='text-7xl '>ORGANIC INGREDIANT</h3>
            </div>
        </div>
    )
}
