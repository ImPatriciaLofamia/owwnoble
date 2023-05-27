import React from 'react'

interface ContactCardProps {
  children: JSX.Element
}

const ContactCard = ({children}: ContactCardProps) => {
  return (
    <div className='z-20 w-1/2  border-2 shadow-2xl px-5 py-8 bg-black text-white rounded-xl'>
    {children}
    </div>
  )
}

export default ContactCard