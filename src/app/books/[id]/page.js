import BookCard from "@/components/BookCard";
import books from "@/data/books";

async function BookDetailPage({ params }) {
  const { id } = await params;
  const book = books.find((book) => book.id === +id);
  return <BookCard book={book} />;
}

export default BookDetailPage;
