import React from 'react'

const Tool = ({ name, coverImg, description, title, price, tag_1, tag_2, url, icon }) => {
    return (
            <div className='flex flex-col lg:flex-row m-1 rounded-xl'>
                <img className='rounded-sm w-full lg:w-3/5' src={coverImg} />
                <div className='flex flex-col gap-4 p-4 pt-0'>
                    <div><div className='text-black font-semibold text-lg'>{name}</div>
                    <div className=''>{title}</div></div>
                    <div className='flex flex-wrap items-center gap-2 text-sm'> <span>Tags:</span>
                        <span className='border rounded-full max-w-max px-2 py-1'>{tag_1}</span>
                        <span className='border rounded-full max-w-max px-2 py-1'>{tag_2}</span>
                    </div>
                    <div className='font-medium'>Price: {price}*</div>
                    <div className='flex justify-between gap-2'>
                        <button className='flex justify-around gap-2 p-1 px-2 items-center rounded-lg border'>
                            <svg className='w-3 h-3' viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6417 1.43529C12.0298 0.786244 12.9701 0.786243 13.3583 1.43529L24.1525 19.4868C24.5511 20.1533 24.0709 21 23.2943 21H1.70575C0.929121 21 0.448912 20.1533 0.847488 19.4868L11.6417 1.43529Z" fill="black" />
                            </svg>
                            <span className='text-xs'>5 UPVOTE</span>
                        </button>

                        <button className='flex max-w-fit justify-center items-center border  text-xs pr-2 pl-3 rounded-full hover:bg-white bg-black hover:text-black text-white'>
                            <span>Open Tool</span>
                            <svg className="w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" />
                            </svg>
                        </button>
                    </div>
                    <div className='h-[1px] bg-black'></div>
                    <div className=''>{description}</div>

                    <div className='text-sm'>Want your tool listed here? Submit your tool Now!</div>
                    <div className='text-xs'>* means they have a free plan but its limited</div>
                </div>
            </div>
    )
}

export default Tool