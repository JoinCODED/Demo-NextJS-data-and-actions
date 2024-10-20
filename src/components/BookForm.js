import { createBook } from "@/actions"

function BookForm() {
  return (
    <form action={createBook} className="flex flex-col gap-3 my-10 text-black">
      <input name="title" placeholder="title" />
      <input type="number" name="price" placeholder="price" />
      <textarea name="description" placeholder="description" />
      <button type="submit" className="text-white">
        MAKE A BOOK
      </button>
    </form>
  )
}

export default BookForm