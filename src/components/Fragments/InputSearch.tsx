'use client'

import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const InputSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const keyword = searchRef.current?.value || ''
    router.push(`/?keyword=${encodeURIComponent(keyword)}`)
    if (searchRef.current) {
      searchRef.current.value = ''

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        })
      }, 500)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[400px] max-w-full"
    >
      <input
        className="border border-gray-300 rounded-lg px-4 py-2 w-full text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-300"
        type="text"
        ref={searchRef}
        placeholder="Search for products..."
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM21 21l-4.5-4.5"
          />
        </svg>
      </button>
    </form>
  )
}

export default InputSearch
