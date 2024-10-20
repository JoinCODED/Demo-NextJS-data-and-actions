import BookCard from '@/components/BookCard'
import books from '@/data/books'

function BookDetail({ params }) {
  const book = books.find(book => book.id === +params.id)
  return <BookCard book={book} />
}

export default BookDetail