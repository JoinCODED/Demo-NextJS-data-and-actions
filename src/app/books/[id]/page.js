import { fetchBooks } from '@/actions'
import BookCard from '@/components/BookCard'

async function BookDetailPage({ params }) {
  const books = await fetchBooks()
  const book = books.find(book => book.id === +params.id)

  return <BookCard book={book} />
}

export default BookDetailPage