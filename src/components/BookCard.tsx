import { Book } from "@/api/api";

type BookCardProps ={
  book: Book
}

/* eslint-disable @next/next/no-img-element */
export default function BookCard({book}: BookCardProps){
  return(
    <div className="
      bg-white rounded-2xl 
      shadow-md p-4 flex flex-col 
      justify-between 
      hover:shadow-lg transition duration-300
    ">
      <img 
        src="https://placehold.co/150x220"
        alt="Capa do livro"
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{book.author_id}</p>
      <p className="text-blue-600 font-bold text-lg mb-3">{book.year}</p>
      <button className="
        bg-blue-600 text-white
        py-2 rounded-xl
        hover:bg-blue-700 transition
      ">
        Exibir Detalhes
      </button>
    </div>
  )
}