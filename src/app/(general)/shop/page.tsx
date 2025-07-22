"use client";

import { Book, getBookList } from "@/api/api";
import BookCard from "@/components/BookCard";
import { useUserContext } from "@/context/useUser";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Shop() {
  const { user } = useUserContext();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }

    const fetchBooks = async () => {
      const data = await getBookList(user.accessToken!);
      setBooks(data);
      console.log(data);
    };

    fetchBooks();
  }, [user]);

  const handleDelete = (bookId: string) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      console.log("Deleting book with id:", bookId);
      // Here you would make an API call to delete the book
      setBooks(books.filter((book) => book.id !== bookId));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <Link href="/shop/create">
          <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <PlusCircle className="w-5 h-5" />
            Add Book
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="relative group">
            <BookCard book={book} />
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/shop/edit/${book.id}`}>
                <button className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition">
                  <Edit className="w-4 h-4" />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
