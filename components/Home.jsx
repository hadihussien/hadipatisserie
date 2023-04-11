import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import React from 'react'
import p1 from "../public/assets/product/product-01.png"
import p2 from "../public/assets/product/product-02.png"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    
    return (
        <div className='home h-screen relative pb-8'>
            <Nav/>
            <div className='carousel container absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden m-auto my-8'>
                <div className='flex relative'>
                    <Image src={p1}></Image>
                    <Image src={p2}></Image>
                </div>
            </div>
            <a href='#menu' className='read-link absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-white p-4 shadow-2xl hover:bg-[#dcb676]'>
                <FontAwesomeIcon icon={faArrowDown} className=' text-[#dcb676] w-4 h-4 block'/>
            </a>
        </div>
    )
}
