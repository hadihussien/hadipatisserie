import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import p12 from "../public/assets/product/product-12.jpg"
import p11 from "../public/assets/product/product-11.jpg"


export default function products() {
    return (
        <div>
            <div className='product'>
                <div className='flex flex-col p-4 gap-8 min-[400px]:p-8 md:flex-row md:gap-24'>
                    <div className='bg-transparent md:mt-16'>
                        <Image src={p12} className="shadow-2xl mb-3"></Image>
                        <h4 className='text-2xl mb-3'>Simple White Bread</h4>
                        <div className='mb-3'>
                            <h6 className='leading-5'>Ingredients:</h6>
                            <p className='italic text-[#c1955d] mb-3'>Wheat, Flour, Salt, Chocolate</p>
                        </div>
                        <h6 className='text-sm'>$2.75</h6>
                    </div>
                    <div className='bg-transparent'>
                        <Image src={p11} className="shadow-2xl mb-3"></Image>
                        <h4 className='text-2xl mb-3'>Chocolate Crinkle Cookies</h4>
                        <div className='mb-3'>
                            <h6 className='leading-5'>Ingredients:</h6>
                            <p className='italic text-[#c1955d] mb-3'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour, Chocolate Chips, Nuts</p>
                        </div>
                        <h6 className='text-sm'>$2.25</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
