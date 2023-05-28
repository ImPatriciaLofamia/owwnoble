import React from 'react'

interface ContactCardProps {
  children: JSX.Element
}

const ContactCard = ({children}: ContactCardProps) => {
  return (
    <div className='z-20 w-full  border-2 shadow-green-500 shadow-2xl pl-10 py-10 rounded-xl'>
    {children}
    </div>
  )
}

export default ContactCard