import ReactPaginate from 'react-paginate'

interface PaginationProductProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PaginationProduct: React.FC<PaginationProductProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1) // `selected` adalah 0-based index
  }

  return (
    <div className="container my-10">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage - 1}
      />
    </div>
  )
}

export default PaginationProduct
