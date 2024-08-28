import Image from 'next/image'
import Link from 'next/link'

interface propsType {
  id_produk: number
  foto_utama: string
  nama_produk: string
  desc: string
}

const ProductCard: React.FC<propsType> = ({
  id_produk,
  foto_utama,
  nama_produk,
  desc,
}) => {
  return (
    <Link href={`/product/${id_produk}`}>
      <div className="w-[250px] h-[350px] border border-gray-200 rounded-xl shadow-lg transition-all duration-700 hover:scale-110 cursor-pointer overflow-hidden my-10">
        <div className="relative w-full h-[70%]">
          <Image
            className="object-contain"
            src={'https://admin.kembangsetaman.store/storage/' + foto_utama}
            layout="fill"
            alt={nama_produk}
          />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-accent font-medium uppercase truncate">
            {nama_produk}
          </h2>
          <p className="text-gray-500 line-clamp-2 mb-4">{desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
