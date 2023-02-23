import React from 'react'

const Footer = () => {
    return (
        <div className='my-16 flex flex-col justify-center items-center'>
            <div className=' flex flex-col text-center items-center p-4 gap-2 text-sm rounded-xl'>
            <div>
                About
            </div>
            <div>Hi AI hunters, <a href='https://sagarjaid.com/'  target="_blank" className='text-blue-600'>Sagar Jaid</a> this side. <br/>Self taught Software Engineer</div>
            <div><a href='https://www.linkedin.com/in/sagarjaid/' target="_blank" className='text-blue-600 underline'>Linkedin</a></div>
            </div>
        </div>
    )
}

export default Footer