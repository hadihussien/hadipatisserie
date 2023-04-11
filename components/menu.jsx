import Link from 'next/link'
import React from 'react'

export default function menu() {
    return (
        <div id='menu' className='py-8 menu transition-all delay-100'>
            <div className='main-heading flex flex-col items-center justify-center w-[100%]'>
                <h3>welcome to our</h3>
                <h1>PATISSERIE</h1>
                <p className='text-center tracking-tight leading-6 mb-4 px-2'>Hey there, I'm Fiona Cornelis, a French baker from Brussels, Belgium. I own my own bakery where I lorem ipsum dolor sit amet. Proin semper pellentesque sapien sit amet pretium phasellus sit.</p>
                <Link href="/Menu" className='py-2 px-6 font-bold text-sm'>READ MORE</Link>
            </div>
        </div>
    )
}
