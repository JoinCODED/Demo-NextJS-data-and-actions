import { fetchBooks } from "@/actions";
import BookCard from "@/components/BookCard";

async function BookDetailPage({ params }) {
  const { id } = await params;
  const books = await fetchBooks();
  const book = books.find((book) => book.id === +id);

  return <BookCard book={book} />;
}

export default BookDetailPage;
