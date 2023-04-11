import React, { useEffect, useState } from 'react'
import Nav from '@/components/Nav'
import Head from 'next/head'
import Image from 'next/image'
import bg2 from "../public/assets/about-02.jpg"
import bg1 from "../public/assets/about-01.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import Section2 from '@/components/section2'
import Review from '@/components/review'
import Contact from '@/components/contact'
export default function About() {
    const [Offset, setoffsetY] = useState(0);
    useEffect(() => {
        const s = document.querySelector(".v-line > span");
        const span = document.querySelector('.v-line')
        window.addEventListener('scroll', () => {
            s.style.cssText = `height:${(window.scrollY + 300) - (span.getBoundingClientRect().top + window.scrollY)}px`;
        })
    })
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='bg-[#f9f3ed] about'>
                <Nav></Nav>
                <div className='main-heading text-center mb-16'>
                    <h3>A few Words</h3>
                    <h1>ABOUT US</h1>
                    <p className='m-auto '>Hey there, I'm Fiona Cornelis, a French baker from Brussels, Belgium. I own my own bakery where I lorem ipsum dolor sit amet. Proin semper pellentesque sapien sit amet pretium phasellus sit.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-16'>
                    <div className='first-img md:basis-1/2'>
                        <Image src={bg2} className="mb-7"></Image>
                        <h3 className='text-2xl	min-[920px]:text-4xl mb-7'>Who we are?</h3>
                        <p className='text-sm min-[920px]:text-base leading-7 italic'>Etiam eget ex ac dui euismod suscipit. Proin laoreet tristique mauris vel congue. Sed eget enim congue est ornare condimentum sed ut purus. Donec dignissim, nisl eget mattis elementum, odio metus sagittis elit, a vestibulum nibh lorem sed quam. Duis in tincidunt orci, ut iaculis enim. Aliquam erat volutpat. Nulla orci lorem, pretium non elit eget, luctus interdum nulla.<br />
                            Suspendisse vestibulum nisi ac ligula sollicitudin aliquam. Cras suscipit metus at ante tincidunt fermentum. Nulla facilisi. Suspendisse sed lectus rutrum, aliquet augue eget, facilisis enim.</p>
                    </div>
                    <div className='second md:basis-1/2'>
                        <Image className='mb-7' src={bg1} />
                        <div className='content flex flex-col'>
                            <h4 className='mb-7 text-2xl min-[920px]:text-[26px]'>A few words about Fiona, and how her passion turned into a flavorous business...</h4>
                            <div className='pl-[19%]'>
                                <h6 className='text-xs min-[920px]:text-base mb-4 pb-4 border-b-[1px] border-[#4c423a]'>Vivamus vulputate finibus eros, vel tincidunt mauris fringilla nec.</h6>
                                <p className='italic text-[14px] min-[920px]:text-base'>Vivamus vulputate finibus eros, vel tincidunt mauris fringilla nec. Curabitur elementum risus sit amet porta feugiat. Etiam interdum lectus vitae ligula faucibus malesuada. Cras laoreet iaculis ligula. Phasellus sed bibendum velit. Mauris a convallis lorem. Nulla facilisi. Fusce id sem ex.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-heading text-center pt-16 mb-2'>
                    <h3>Since 1965</h3>
                    <h1>HISTORY</h1>
                </div>
                <div className='flex flex-col  gap-4 relative lg:flex-row lg:flex-wrap'>
                    <div className='flex relative items-center justify-center'>
                        <div className='mr-8'>
                            <FontAwesomeIcon className='relative w-[12px] h-[12px] text-[#c1955d]' icon={faCircle} />
                        </div>
                        <div className='history bg-white relative'>
                            <p className='text-sm min-[920px]:text-base italic mb-1'>February 11, 1965</p>
                            <h4 className='text-2xl	min-[920px]:text-[26px] mb-1'>Class aptent taciti sociosqu</h4>
                            <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id erat in libero lobortis congue eget laoreet augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                        </div>
                    </div>
                    <div className='flex relative items-center justify-center'>
                        <div className='mr-8'>
                            <FontAwesomeIcon className='relative w-[12px] h-[12px] text-[#c1955d]' icon={faCircle} />
                        </div>
                        <div className='history bg-white relative'>
                            <p className='text-sm min-[920px]:text-base italic mb-1'>March 3, 1975</p>
                            <h4 className='text-2xl	min-[920px]:text-[26px] mb-1'>Sed egestas venenatis enim</h4>
                            <p className='italic'>Pellentesque tincidunt arcu efficitur efficitur porttitor. Mauris lobortis sapien justo, eleifend accumsan lectus fringilla vel. Proin a tempor enim, quis facilisis velit. Sed at est nisl. Sed egestas venenatis enim, id sagittis odio. Curabitur imperdiet mauris in nisi luctus, vitae facilisis ipsum dapibus. Ut placerat nisl velit, vitae aliquam magna blandit ac. Etiam blandit magna consectetur tellus varius, vitae imperdiet orci tempor. Donec tempus non</p>
                        </div>
                    </div>
                    <div className='flex relative items-center justify-center'>
                        <div className='mr-8'>
                            <FontAwesomeIcon className='relative w-[12px] h-[12px] text-[#c1955d]' icon={faCircle} />
                        </div>
                        <div className='history bg-white relative'>
                            <p className='text-sm min-[920px]:text-base italic mb-1'>July 19, 1998</p>
                            <h4 className='text-2xl	min-[920px]:text-[26px] mb-1'>Donec tempus non arcu a consequat.</h4>
                            <p className='italic'>Donec tempus non arcu a consequat. Sed pretium tempor metus, quis interdum sapien lobortis quis. Proin vitae justo lectus. In hac habitasse platea dictumst. Proin elit elit, eleifend ultrices magna vitae, faucibus ornare nisi. Sed eget porta urna. Ut purus felis, porttitor at egestas in, sodales maximus velit.</p>
                        </div>
                    </div>
                    <div className='flex relative items-center justify-center'>
                        <div className='mr-8'>
                            <FontAwesomeIcon className='relative w-[12px] h-[12px] text-[#c1955d]' icon={faCircle} />
                        </div>
                        <div className='history bg-white relative'>
                            <p className='text-sm min-[920px]:text-base italic mb-1'>September 23, 2005</p>
                            <h4 className='text-2xl	min-[920px]:text-[26px] mb-1'>Integer mattis sagittis libero</h4>
                            <p className='italic'>Vestibulum auctor lacus ipsum. Sed eget maximus massa. In in dui vitae diam maximus vulputate volutpat eget magna. Mauris sed ante non diam pellentesque pharetra. Mauris et lacus velit. Donec lorem orci, efficitur ut rhoncus eu, interdum id diam. Integer mattis sagittis libero et pharetra. Curabitur sit amet nulla sit amet ligula cursus euismod convallis et lorem.</p>
                        </div>
                    </div>
                    <div className='flex relative items-center justify-center'>
                        <div className='mr-8'>
                            <FontAwesomeIcon className='relative w-[12px] h-[12px] text-[#c1955d]' icon={faCircle} />
                        </div>
                        <div className='history bg-white relative'>
                            <p className='text-sm min-[920px]:text-base italic mb-1'>December 24, 2017</p>
                            <h4 className='text-2xl	min-[920px]:text-[26px] mb-1'>Donec lorem orci</h4>
                            <p className='italic'>Donec lorem orci, efficitur ut rhoncus eu, interdum id diam. Integer mattis sagittis libero et pharetra. Curabitur sit amet nulla sit amet ligula cursus euismod convallis et lorem.</p>
                        </div>
                    </div>
                    <div className=''>
                        <span className="v-line absolute top-1/2 -translate-y-1/2 left-5 h-[85%] w-[2px] overflow-hidden">
                            <span className='w-[2px] bg-[#c1955d] block relative z-10 max-h-[100%]'></span>
                        </span>
                    </div>
                </div>
            </div>
            <Section2 />
            <Review />
            <Contact />
        </div>
    )
}
