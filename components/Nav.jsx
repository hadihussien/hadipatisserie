import Image from 'next/image'
import Link from 'next/link'
import React, {useState } from 'react'
import logo from '../public/assets/logo.png'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {
    const [active, isactive] = useState(false);
    const handleactive = () => {
        isactive(!active)
    }
    return (
        <div>
            <div className='flex flex-col items-center py-4 relative md:hidden'>
                <Link href="#">
                    <Image src={logo}></Image>
                </Link>
                <Link href='#' onClick={handleactive} className='p-2 border-2 rounded-full border-black'>
                    <FontAwesomeIcon icon={active ? faXmark : faBars} className="w-5 h-5" />
                </Link>
                <ul className={active ? "col bg-white flex flex-col w-full my-4 absolute top-[100%] z-10" : "hidden"}>
                    <li ><Link href="/" className={"text-main-color py-5 px-4 border border-[main-color] hover:bg-[hover-background-nav"}>HOME</Link></li>
                    <li><Link href="/Menu" className={'text-main-color py-5 px-4 border border-[main-color] hover:bg-[hover-background-nav]'}>OUR MENU</Link></li>
                    <li><Link href="/About" className={'text-main-color py-5 px-4 border border-[main-color] hover:bg-[hover-background-nav]'}>ABOUT US</Link></li>
                    <li><Link href="/Contact" className={'text-main-color py-5 px-4 border border-[main-color] hover:bg-[hover-background-nav]'}>CONTACT</Link></li>
                </ul>
            </div>
            <ul className="hidden row md:flex justify-center items-center py-4 gap-8 font-extrabold relative z-20">
                <li><Link  href="/" className={"text-main-color py-5 px-4"}>HOME</Link></li>
                <li><Link  href="/Menu" className={"text-main-color py-5 px-4"}>OUR MENU</Link></li>
                <li><Image src={logo}></Image></li>
                <li><Link  href="/About" className={"text-main-color py-5 px-4"}>ABOUT</Link></li>
                <li><Link  href="/Contact" className={"text-main-color py-5 px-4"}>CONTACT</Link></li>
            </ul>
        </div>
    )
}