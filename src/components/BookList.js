import BookCard from './BookCard'

function BookList({ books }) {
  return (
    <div className='flex flex-col gap-5'>
      {books.map(book => <BookCard key={book.id + book.title} book={book} />)}
    </div>
  )
}

export default BookList