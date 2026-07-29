import React from 'react'
import { FaRocket } from 'react-icons/fa'

const footerYear = new Date().getFullYear(

)

function Footer() {
  return (
    <footer className='starfield footer p-10 bg-neutral text-neutral-content footer-center'>
        <div>
        <FaRocket className='inline-block text-3xl' aria-hidden='true' focusable='false' />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>

    </footer>
  )
}

export default Footer