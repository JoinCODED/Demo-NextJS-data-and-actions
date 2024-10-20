import { fetchBooks } from '@/actions'
import BookList from '@/components/BookList'

async function BooksPage() {
  const books = await fetchBooks()
  return <BookList books={books} />
}

export default BooksPage