import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '@/components/Nav'
import Contact1 from '@/components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    const [empty1, setEmpty1] = useState(false)
    const [empty2, setEmpty2] = useState(false)
    const [empty3, setEmpty3] = useState(false)
    useEffect(() => {
        const message = document.forms[0]
        message.addEventListener("submit", (Event) => {
            document.querySelectorAll('.required').forEach((ev, l) => {
                if (l == 0 && ev.value == '') {
                    setEmpty1(true);
                    Event.preventDefault();
                }
                else if (l == 1 && ev.value == '') {
                    setEmpty2(true);
                    Event.preventDefault();
                }
                else if (l == 2 && ev.value == '') {
                    setEmpty3(true);
                    Event.preventDefault();
                }
                else {
                    setEmpty1(false);
                    setEmpty2(false);
                    setEmpty3(false);
                }
            })
        })
    })
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='bg-[#f9f3ed]'>
                <Nav />
                <div className='main-heading text-center'>
                    <h3>get in touch</h3>
                    <h1>CONTACT US</h1>
                </div>
                <div className='message justify-center flex flex-col px-[6%] lg:flex-row lg:transition-all lg:delay-100 lg:gap-12 my-8'>
                    <div className='bg-white py-[12%] px-[8%] w-full shadow-2xl lg:order-1 lg:px-8 lg:py-7'>
                        <h3 className='text-center'>Drop us a line</h3>
                        <form action="">
                            <label htmlFor="" className='title relative font-bold'>Name</label>
                            <div className='max-w-[100%] flex gap-[2%] my-4'>
                                <div className='basis-[48%]'>
                                    <input type="text" placeholder='First Name' className='w-full required' />
                                    <label className={empty1 ? "error" : "hidden"}>this field is required</label>
                                </div>
                                <div className='basis-[48%]'>
                                    <input type="text" placeholder='Last Name' className='w-full required' />
                                    <label className={empty2 ? "error" : "hidden"}>this field is required</label>
                                </div>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="" className='title relative font-bold w-full'>Email</label>
                                <input type="text" placeholder='Email Adress' className='required my-3' />
                                <label className={empty3 ? "error" : "hidden"}>this field is required</label>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold relative'>Message</label>
                                <textarea name="" className='my-3' id="" cols="30" rows="2" placeholder='Your Message'></textarea>
                            </div>
                            <div className='w-fit m-auto'>
                                <input className='block py-3 px-6 cursor-pointer font-bold' type="submit" value='SUBMIT' />
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col py-[12%] w-full lg:px-8 lg:py-7'>
                        <div className='flex justify-center flex-col mb-12 md:flex-row md:items-center md:justify-between'>
                            <h6 className='text-sm text-center pb-7 md:basis-1/6'>Contact info</h6>
                            <ul className='md:basis-2/3'>
                                <li><a href="" className='text-[4.8vw] italic md:text-[2.3vw] lg:text-[1.2vw]'><FontAwesomeIcon className='w-[13px] inline mr-3' icon={faEnvelope} />patisserie@email.com</a></li>
                                <li><a href="" className='text-[4.8vw] mt-4 italic md:text-[2.3vw] lg:text-[1.2vw]'><FontAwesomeIcon className='w-[13px] inline mr-3' icon={faPhoneAlt} />456 754 1001</a></li>
                                <li><a href="" className='text-[4.8vw] mt-4 italic md:text-[2.3vw] lg:text-[1.2vw]'><FontAwesomeIcon className='w-[13px] inline mr-3' icon={faMapMarker} />Avenue Everard 15, Forest Brussels 1190, Belgium</a></li>
                            </ul>
                        </div>
                        <div className='flex justify-center flex-col md:flex-row md:items-center md:justify-between'>
                            <h6 className='text-sm text-center pb-7 basis-1/6'>Opening Hours</h6>
                            <ul className='md:basis-2/3'>
                                <li className='flex text-[4.8vw] italic justify-between mt-4 md:text-[2.3vw] lg:text-[1.2vw]'><span>Monday - Friday</span> <span>8:00 AM - 7:00 PM</span></li>
                                <li className='flex text-[4.8vw] italic justify-between mt-4 md:text-[2.3vw] lg:text-[1.2vw]'><span>Saturday</span> <span>8:00 AM - 7:00 PM</span></li>
                                <li className='closed flex text-[4.8vw] italic justify-between mt-4 md:text-[2.3vw] lg:text-[1.2vw]'><span>Sunday</span> <span>closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Contact1/>
            </div>
        </div>
    )
}
