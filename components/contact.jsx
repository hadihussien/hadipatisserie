import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function contact() {
    const [empty, isempty] = useState(0)
    useEffect(() => {
        document.forms[0].addEventListener("submit", (Event) => {
            const requir = document.querySelector("form input");
            const regEmail = /\w\@(\w)*\.com/;
            if (requir.value == '') {
                isempty(1);
                Event.preventDefault();
            }
            else if(!regEmail.test(requir.value)){
                isempty(2)
                Event.preventDefault();
            }
            else{
                isempty(3)
                Event.preventDefault();
            }
        })
    })
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <footer className='text-center flex flex-col items-center'>
                <h3 className='text-3xl font-medium	leading-9 mb-8'>Sign Up For Special Offer</h3>
                <form action="" className='flex flex-col w-full mb-8 max-w-[516px] sm:flex-row sm:gap-4'>
                    <div className='w-full mb-4'>
                        <input type="text" className={empty == 3 ? "hidden": "sm:basis-3/4 w-full"} placeholder='Your email address...' />
                        <p className={empty == 1 ? "text-[#990000]" : "hidden"}>this filed is required</p>
                        <p className={empty == 2? "text-[#990000]" : "hidden"}>not valid Email!!</p>
                        <p className={empty == 3? "block" : "hidden"}>Thanks for signing up for the newsletter! We'll be in touch soon.</p>
                    </div>
                    <input type="submit" className={empty== 3? 'hidden':'cursor-pointer mb-4 sm:sm:basis-1/4'} value='SUBMIT' />
                </form>
                <nav>
                    <ul className='text-center mb-8 flex flex-col min-[500px]:flex-row min-[500px]:gap-4 '>
                        <li><a href="/" className='active m-auto p-3 text '>Home</a></li>
                        <li><a href="/Menu" className='m-auto p-3'>Our Menu</a></li>
                        <li><a href="/About" className='m-auto p-3'>About Us</a></li>
                        <li><a href="/Contact" className='m-auto p-3'>Contact</a></li>
                    </ul>
                </nav>
                <div className="social flex">
                    <Link href="/" className='p-2'><FontAwesomeIcon icon={faFacebookF} className="text-white" /></Link>
                    <Link href="/" className='p-2'><FontAwesomeIcon icon={faTwitter} className="text-white" /></Link>
                    <Link href="/" className='p-2'><FontAwesomeIcon icon={faInstagram} className="text-white" /></Link>
                </div>
                <p className='font-medium p-6'>Powered by@hadi</p>
            </footer>
        </div>
    )
}
