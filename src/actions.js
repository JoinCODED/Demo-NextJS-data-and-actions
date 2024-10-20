'use server'

export async function fetchBooks() {
  const response = await fetch("https://coded-books-api-crud.eapi.joincoded.com/books");
  const books = await response.json();
  return books;
}