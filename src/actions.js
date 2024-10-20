'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = "https://coded-books-api-crud.eapi.joincoded.com";
const headers = new Headers()
headers.append("Content-Type", "application/json")

export async function fetchBooks() {
  const response = await fetch(`${baseUrl}/books`);
  const books = await response.json();
  return books;
}

export async function createBook(formData) {
  const book = Object.fromEntries(formData)
  const response = await fetch(`${baseUrl}/books`, {
    method: "POST",
    headers,
    body: JSON.stringify(book)
  })
  const newBook = await response.json()

  revalidatePath('/books')
  revalidatePath(`/books/[id]`, 'page')
  redirect(`/books/${newBook.id}`)
}