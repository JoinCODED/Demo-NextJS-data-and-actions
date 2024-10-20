import BookList from '@/components/BookList'

async function BooksPage() {
  const response = await fetch("https://coded-books-api-crud.eapi.joincoded.com/books");
  const books = await response.json();
  return <BookList books={books} />
}

export default BooksPage