'use client'

import { useState } from "react"

function BookForm() {
  const [book, setBook] = useState({
    title: "",
    price: 0,
    description: ""
  })

  function handleChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // DO SOMETHING WITH THE DATA
    console.log(book)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 my-10 text-black">
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="title" />
      <input
        type="number"
        name="price"
        value={book.price}
        onChange={handleChange}
        placeholder="price" />
      <textarea
        name="description"
        value={book.description}
        onChange={handleChange}
        placeholder="description" />
      <button
        type="submit"
        className="text-white">
        MAKE A BOOK
      </button>
    </form>
  )
}

export default BookForm