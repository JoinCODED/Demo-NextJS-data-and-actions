import BookCard from '@/components/BookCard'

async function BookDetailPage({ params }) {
  const response = await fetch("https://coded-books-api-crud.eapi.joincoded.com/books");
  const books = await response.json();

  const book = books.find(book => book.id === +params.id)

  return <BookCard book={book} />
}

export default BookDetailPage