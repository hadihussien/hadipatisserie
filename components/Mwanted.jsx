import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import p05 from "../public/assets/product/product-05.jpg"
import p08 from "../public/assets/product/product-08.jpg"
import p09 from "../public/assets/product/product-09.jpg"

export default function Mwanted() {
    return (
        <div className='wanted mb'>
            <div className='heading text-end mb-8'>
                <h2>MOST WANTED</h2>
                <Link href="#">
                    view our menu
                </Link>
            </div>
            <div className='flex flex-col gap-8 sm:gap-14 md:flex-row'>
                <div className='discription md:mt-8'>
                    <Image src={p05} className="shadow-2xl mb-8"></Image>
                    <h4 className='text-2xl leading-5'>Frensh Croissant</h4>
                    <span className='text-xs lg:text-sm'>$ 2.95</span>
                    <p className='italic my-4 text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour</p>
                </div>
                <div className='discription'>
                    <Image src={p08} className="shadow-2xl mb-8"></Image>
                    <h4 className='text-2xl leading-5'>Fresh Fruit Tart</h4>
                    <span className='text-xs lg:text-sm'>$3.25</span>
                    <p className='italic my-4 text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour, Grapes, Kiwi, Whipped Cream</p>
                </div>
                <div className='discription mt-5'>
                    <Image src={p09} className="shadow-2xl mb-8"></Image>
                    <h4 className='text-2xl leading-5'>No-Knead Bread​</h4>
                    <span className='text-xs lg:text-sm'>$4.50</span>
                    <p className='italic my-4 text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour</p>
                </div>
            </div>
        </div>
    )
}
