import React from 'react'

function Modal({ children }) {
  return (
    <div className='mx-auto max-w-2xl w-full h-full bg-slate-700'>
      {children}
    </div>
  )
}

export default Modal
