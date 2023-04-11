import React from 'react'
import Link from 'next/link'
export default function section1() {
    return (
        <div>
            <div className='section1 relative text-white pl-8 py-8 pr-24 lg:bg-fixed lg:py-20 lg:pl-28'> 
                <h2 className='mb-4 max-w-[580px]'>CROISSANTS, A TRUE DELIGHT</h2>
                <h4 className='text-2xl mb-4'>Enjoy each bite as lorem ipsum</h4>
                <Link href="/Menu" className='text-xs font-bold tracking-wider py-3 px-6 transition-all delay-100'>VIEW MENU</Link>
                <p className='mt-28'>Baked with Love & Organic ingredients.</p>
            </div>
        </div>
    )
}
