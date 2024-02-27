import React from 'react'

function Footer() {
  return (
    <footer className="shadow bg-[#e5e5e5] ">
    <div className="w-full container mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="/login"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <div className='footerimg w-10 h-9'></div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GYS
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium hover:text-black  dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
             </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm hover:text-black  sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://www.linkedin.com/in/aadhil-t/" className="hover:underline">
          GYS™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  
  )
}

export default Footer
