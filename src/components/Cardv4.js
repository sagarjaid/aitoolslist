import React from 'react'

const Cardv4 = ({ name, coverImg, description, title, price, tag_1, tag_2, url, icon }) => {
    return (
        <div className="w-full sdm:w-1/2 l:w-1/3">

            <div className='flex flex-col gap-2 p-4 rounded-xl border m-1 '>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-black font-medium'>{name}</div>
                        <div className='text-xs'>{title}</div>
                    </div>
                    <img className='rounded-md m-1 w-14 border' src={icon} />
                </div>
                <div className='flex gap-2 text-sm'>
                    <span className='border rounded-full max-w-max px-2 py-1'>{tag_1}</span>
                    <span className='border rounded-full max-w-max px-2 py-1'>{tag_2}</span>
                </div>
                <div className='text-sm'>{description}</div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='text-xl font-medium'>{price}</div>
                    <button className='flex max-w-fit items-center bg-black text-xs px-4 rounded-full text-white'>
                        <span>Open Tool</span>
                        <svg className="w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cardv4