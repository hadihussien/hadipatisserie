import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function review() {
    return (
        <div className='review'>
            <div>
                <div className="heading">
                    <h2 className="mb-4 max-w-[580px]">SOME REVIEWS FROM</h2>
                    <p>Our happy clients</p>
                </div>
                <div className="opinion flex flex-col gap-20 md:flex-row">
                    <div>
                        <div className='flex mb-5'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className='italic mb-5 text-lg lg:text-xl'>" Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing. "</p>
                        <span className='text-sm mb-5'>Jane Oliver</span>
                    </div>
                    <div>
                        <div className='flex mb-5'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className='italic mb-5 text-lg lg:text-xl'>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing. "</p>
                        <span className='text-sm mb-5'>Marc Jamesson</span>
                    </div>
                    <div>
                        <div className='flex mb-5'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className='italic mb-5 text-lg lg:text-xl'>" Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing. "</p>
                        <span className='text-sm mb-5'>Jane Oliver</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
