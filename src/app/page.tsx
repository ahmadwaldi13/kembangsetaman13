import Image from 'next/image'
import Hero from '@/components/Hero'
// import NewProduct from '@/components/NewProduct'
import ProductCategories from '@/components/ProductCategories'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const NewProduct = dynamic(() => import('../components/NewProduct'), {
  ssr: false, // disable server-side rendering
})

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />

      <Suspense fallback={<div>Loading...</div>}>
        <NewProduct />
      </Suspense>
      {/* <NewProduct /> */}
    </main>
  )
}
