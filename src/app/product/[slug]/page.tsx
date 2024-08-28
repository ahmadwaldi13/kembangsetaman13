import DetailProduct from '@/components/DetailProduct'

type DetailProductPageProps = {
  params: {
    slug: string
  }
}

const DetailProductPage = (props: DetailProductPageProps) => {
  const { params } = props
  console.info(params)
  return (
    <>
      <DetailProduct params={params} />
    </>
  )
}

export default DetailProductPage
