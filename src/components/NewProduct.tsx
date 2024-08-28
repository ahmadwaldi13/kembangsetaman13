'use client'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { useSearchParams } from 'next/navigation'
import PaginationProduct from './PaginationProduct'
import SkeletonProduct from './Fragments/SkeletonProduct'

interface Product {
  id_produk: number
  foto_utama: string
  nama_produk: string
  deskripsi: string
}

interface NewProductProps {
  initialProducts?: Product[]
}

const NewProduct: React.FC<NewProductProps> = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const searchParams = useSearchParams()
  const categoryParams = searchParams.get('category') || ''
  const keywordParams = searchParams.get('keyword') || ''
  const keyword =
    searchParams.get('keyword') || searchParams.get('category') || ''

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        if (categoryParams) {
          const url = `https://admin.kembangsetaman.store/api/categories/search?category=${keyword}&page=${currentPage}`
          const response = await axios.get(url)
          console.info(response.data)
          setProducts(response.data)
          setTotalPages(response.data.last_page)

          return false
        }

        if (keywordParams) {
          const url = `https://admin.kembangsetaman.store/api/product/search?keyword=${keyword}&page=${currentPage}`
          const response = await axios.get(url)
          console.info(response.data)
          setProducts(response.data)
          setTotalPages(response.data.last_page)

          return false
        }
        const url = `https://admin.kembangsetaman.store/api/products?page=${currentPage}`
        const response = await axios.get(url)
        setProducts(response.data.data)
        setTotalPages(response.data.last_page)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [keyword, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div className="container pt-6">
        <h2 className="font-medium text-2xl pb-4">Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SkeletonProduct key={index} />
            ))
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id_produk}
                id_produk={product.id_produk}
                foto_utama={product.foto_utama}
                nama_produk={product.nama_produk}
                desc={product.deskripsi}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      <PaginationProduct
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default NewProduct
