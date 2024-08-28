'use client'

import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoMenuOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MobNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter() // Menggunakan useRouter untuk navigasi

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleHomeClick = () => {
    router.push('/') // Kembali ke halaman home
  }

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-50">
      {' '}
      {/* Menambahkan z-index yang lebih besar */}
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline onClick={toggleMenu} className="cursor-pointer" />
        <AiOutlineHome
          onClick={handleHomeClick}
          className="cursor-pointer"
        />{' '}
        {/* Menambahkan handler untuk klik Home */}
      </div>
      {isMenuOpen && (
        <div className="absolute bottom-12 left-0 w-full bg-white shadow-lg p-4 z-40">
          {' '}
          {/* Menambahkan z-index untuk dropdown menu */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/about-us" className="text-lg navbar__link ">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about-web" className="text-lg navbar__link">
                About Web
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobNavbar
