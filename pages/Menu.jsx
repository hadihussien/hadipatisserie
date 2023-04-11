import Head from 'next/head.js'
import Image from 'next/image.js'
import p1 from "../public/assets/product/Menu/product-03-150x150.jpg"
import p2 from "../public/assets/product/Menu/product-04-150x150.jpg"
import p3 from "../public/assets/product/Menu/product-05-150x150.jpg"
import p4 from "../public/assets/product/Menu/product-06-150x150.jpg"
import p5 from "../public/assets/product/Menu/product-07-150x150.jpg"
import p6 from "../public/assets/product/Menu/product-08-150x150.jpg"
import p7 from "../public/assets/product/Menu/product-09-150x150.jpg"
import p8 from "../public/assets/product/Menu/product-10-150x150.jpg"
import React from 'react'
import Nav from '../components/Nav.jsx'
import Section2 from '@/components/section2'
import Contact from '@/components/contact'
export default function Menu() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='Menu-Page bg-[#f9f3ed]'>
                <Nav />
                <div className='heading text-center py-8'>
                    <p className=''>Have a look At</p>
                    <h1>OUR MENU</h1>
                </div>
                <div className='All-products flex flex-col items-center gap-8 lg:flex-row'>
                    <div className='flex flex-col items-center gap-8 min-[480px]:w-full'>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p1} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>Old-Fashioned Brown Bread</h6>
                                <p className='text-sm'>Baking Soda, Water, Salt, Flour</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$2.50</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p2} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start min-[480px]:basis-1/2'>
                                <h6 className='text-2xl italic font-semibold'>Simple White Bread</h6>
                                <p className='text-sm'>Yeast, Water, Salt, Flour,</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$2.50</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p3} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>French Croissant</h6>
                                <p className='text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$1.90</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p4} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start min-[480px]:basis-1/2'>
                                <h6 className='text-2xl italic font-semibold'>No-Knead Bread</h6>
                                <p className='text-sm'>Baking Soda, Water, Salt, Flour</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$4.65</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-8 min-[480px]:w-full'>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p5} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>Chocolate Crinkle Cookies</h6>
                                <p className='text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour, Sugar</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$1.50</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p6} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>Fruit Tart</h6>
                                <p className='text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour, Grapes, Kiwi, Whipped Cream</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$2.75</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p7} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>No-Knead Bread</h6>
                                <p className='text-sm'>Baking Soda, Water, Salt, Flour</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$3.95</span>
                        </div>
                        <div className='flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:w-full'>
                            <div className='max-w-[150px] max-h-[150px] bg-white w-fit rounded-full basis-1/2 overflow-hidden'>
                                <a className=''>
                                    <Image src={p8} className="w-full"></Image>
                                </a>
                            </div>
                            <div className='text-center min-[480px]:text-start'>
                                <h6 className='text-2xl italic font-semibold'>Homemade Bread</h6>
                                <p className='text-sm'>Butter, Eggs, Vanilla, Baking Soda, Water, Salt, Flour</p>
                            </div>
                            <span className='text-2xl m-auto min-[480px]:ml-auto'>$4.50</span>
                        </div>
                    </div>
                </div>
                <Section2/>
                <Contact />
            </div>
        </>
    )
}
