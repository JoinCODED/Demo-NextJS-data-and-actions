import BookList from '@/components/BookList'
import books from '@/data/books'

function BooksPage() {
  return <BookList books={books} />
}

export default BooksPage