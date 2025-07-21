import axios from "axios";

export type Book = {
  id: string
  title: string
  summary: string
  year: number
  isbn: string
  category_id: number
  publisher_id: number
  author_id: number
  pages: number
}

export async function getBookList(filter?: string) {
  try{
    const response = await axios.get<Book[]>(`http://localhost:3002/books?${filter}`)
    console.log(response)
    return response.data
  } catch(error){
    console.error(error)
    return []
  }
}
