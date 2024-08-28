/* eslint-disable @next/next/no-img-element */
'use client'

import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Tambahan {
  foto_tambahan: string
  deskripsi_tambahan?: string
}

interface Product {
  id_produk: number
  foto_utama: string
  nama_produk: string
  deskripsi: string
  nama_kategori: string
  link_produk: string
  tambahan?: Tambahan[]
}

type Params = {
  params: {
    slug: string
  }
}

const DetailProduct = (params: Params) => {
  const slug = parseInt(params.params.slug)

  const [product, setProduct] = useState<Product | null>(null)
  const [mainImage, setMainImage] = useState<string>('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product>(
          `https://admin.kembangsetaman.store/api/products/${slug}`
        )
        const productData = response.data
        setProduct(productData)
        setMainImage(
          `https://admin.kembangsetaman.store/storage/${productData.foto_utama}`
        )
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [slug])

  const changeImage = (src: string) => {
    setMainImage(src)
  }

  return (
    <>
      <div className="bg-white min-h-[100vh]">
        <div className="container mx-auto px-4 py-24 w-full">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="relative w-full h-80 bg-white rounded-lg shadow-md">
                <img
                  src={mainImage}
                  alt={product?.nama_produk || 'Product Image'}
                  className="w-full h-full object-contain p-4 rounded-lg"
                  id="mainImage"
                />
              </div>
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {/* Thumbnail for the main image */}
                <img
                  src={`https://admin.kembangsetaman.store/storage/${product?.foto_utama}`}
                  alt="Thumbnail"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() =>
                    changeImage(
                      `https://admin.kembangsetaman.store/storage/${product?.foto_utama}`
                    )
                  }
                />
                {/* Thumbnails for the additional images */}
                {product?.tambahan?.map((tambahan, index) => (
                  <img
                    key={index}
                    src={`https://admin.kembangsetaman.store/storage/${tambahan.foto_tambahan}`}
                    alt="Thumbnail"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() =>
                      changeImage(
                        `https://admin.kembangsetaman.store/storage/${tambahan.foto_tambahan}`
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {product?.nama_produk}
              </h2>

              <p className="text-gray-700 mb-6">{product?.deskripsi}</p>

              <div className="mb-5">
                <h3 className="text-sm font-semibold text-slate-800">
                  Category
                </h3>
                <p className="text-slate-500 text-sm rounded-full inline-block">
                  <ol>{product?.nama_kategori}</ol>
                </p>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-slate-800 text-sm font-semibold">
                  Details
                </h3>
                {product?.tambahan?.map(
                  (tambahan, index) =>
                    tambahan.deskripsi_tambahan && (
                      <div
                        key={index}
                        className="text-slate-500 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: tambahan.deskripsi_tambahan,
                        }}
                      />
                    )
                )}
              </div>

              <div className="flex space-x-4 mb-6">
                <Link href={`${product?.link_produk}`} target="_blank" passHref>
                  <button className="bg-green-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct
