import React from 'react'

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 bg-gray-100 py-4">
        <p className='flex justify-center space-x-4 mt-4'>
            &copy; {new Date().getFullYear()} QR Share Pro. All rights reserved.
        </p>
    </div>
  )
}

export default Footer

