'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Category {
  id_kategori: number
  nama_kategori: string
}

export default function ProductCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [showAll, setShowAll] = useState(false)
  const router = useRouter()

  const displayedCategories = showAll ? categories : categories.slice(0, 4)

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          'https://admin.kembangsetaman.store/api/categories'
        )
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryClick = (category: string) => {
    router.push(`/?category=${encodeURIComponent(category)}`)
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }, 500)
  }

  return (
    <div className="container pt-6 lg:pt-0 my-14">
      <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
        <h2 className="text-xl font-semibold text-blackish sm:text-2xl">
          Shop by category
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedCategories.map((category) => (
          <input
            type="button"
            key={category.id_kategori}
            value={category.nama_kategori}
            onClick={() => handleCategoryClick(category.nama_kategori)}
            className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer text-sm font-medium text-gray-900 dark:text-white sm:px-3 sm:py-1 sm:text-xs"
          />
        ))}
      </div>

      {categories.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={handleShowAll}
            className="flex items-center justify-center text-sm font-medium text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500"
          >
            {showAll ? 'Show Less' : 'All Categories'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 w-4 h-4 transform transition-transform ${
                showAll ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
