import { fetchBooks } from '@/actions'
import BookForm from '@/components/BookForm'
import BookList from '@/components/BookList'

async function BooksPage() {
  const books = await fetchBooks()
  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  )
}

export default BooksPage