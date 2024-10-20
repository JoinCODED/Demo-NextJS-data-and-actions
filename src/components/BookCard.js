import Link from "next/link"

function BookCard({ book }) {
  const { title, price, id, description } = book
  return (
    <Link href={`/books/${id}`}>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </Link>
  )
}

export default BookCard