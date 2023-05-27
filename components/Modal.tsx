import React from 'react'

interface ModalProps {
children: JSX.Element
}

const Modal = ({children}: ModalProps) => {
  return (
        <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full py-0 transition-all duration-1000 ease-in-out bg-slate-700 bg-opacity-50 sm:py-4">
        <div className=" bg-white rounded-lg sm:h-3/4 sm:w-3/4 border shadow">
            
            <div className="justify-center w-full h-full my-auto pt-16">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal