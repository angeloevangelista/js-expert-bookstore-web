"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  BookOpen,
  Hash,
  Type,
  Calendar,
  Info,
  CheckCircle,
  ArrowLeft,
  User,
  Award,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author_id: z.coerce.number().int().positive("Author is required"),
  year: z.coerce.number().int().min(1000, "Invalid year"),
  isbn: z.string().min(1, "ISBN is required"),
  category_id: z.coerce.number().int().positive("Category is required"),
  publisher_id: z.coerce.number().int().positive("Publisher is required"),
  pages: z.coerce.number().int().positive("Pages must be a positive number"),
  summary: z.string().min(1, "Summary is required"),
});

type BookFormData = z.infer<typeof bookSchema>;

// Mock data - in a real app, you would fetch this based on the ID
const mockBook = {
  title: "The Great Gatsby",
  author_id: 1, // Corresponds to F. Scott Fitzgerald
  year: 1925,
  isbn: "978-0743273565",
  category_id: 2, // Corresponds to "Classic"
  publisher_id: 1, // Corresponds to "Scribner"
  pages: 180,
  summary:
    "A story of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan.",
};

const authors = [
  { id: 1, name: "F. Scott Fitzgerald" },
  { id: 2, name: "George Orwell" },
  { id: 3, name: "Jane Austen" },
  { id: 4, name: "J.K. Rowling" },
  { id: 5, name: "Stephen King" },
];
const categories = [
  { id: 1, name: "Fiction" },
  { id: 2, name: "Classic" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Science Fiction" },
  { id: 5, name: "Fantasy" },
  { id: 6, name: "Non-Fiction" },
];
const publishers = [
  { id: 1, name: "Scribner" },
  { id: 2, name: "Penguin Books" },
  { id: 3, name: "HarperCollins" },
  { id: 4, name: "Vintage" },
  { id: 5, name: "Simon & Schuster" },
];

export default function EditBookPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: mockBook, // Pre-fill the form with existing book data
  });

  const onSubmit = (data: BookFormData) => {
    console.log("Updated book data:", data);
    // Here you would typically make an API call to update the book
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Book Details
          </h1>
          <p className="text-gray-600">Editing book with ID: {id}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {isSubmitSuccessful ? (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Updated Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                The book details have been saved.
              </p>
              <Link
                href="/shop"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Back to Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="space-y-2">
                  <label
                    htmlFor="title"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Title
                  </label>
                  <div className="relative">
                    <Type className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="title"
                      {...register("title")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Book Title"
                    />
                  </div>
                  {errors.title && (
                    <p className="text-sm text-red-600">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <label
                    htmlFor="author_id"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Author
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="author_id"
                      {...register("author_id")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="">Select an author</option>
                      {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.author_id && (
                    <p className="text-sm text-red-600">
                      {errors.author_id.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Year */}
                <div className="space-y-2">
                  <label
                    htmlFor="year"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Year
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="year"
                      type="number"
                      {...register("year")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Publication Year"
                    />
                  </div>
                  {errors.year && (
                    <p className="text-sm text-red-600">
                      {errors.year.message}
                    </p>
                  )}
                </div>

                {/* ISBN */}
                <div className="space-y-2">
                  <label
                    htmlFor="isbn"
                    className="text-sm font-semibold text-gray-700"
                  >
                    ISBN
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="isbn"
                      {...register("isbn")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="ISBN"
                    />
                  </div>
                  {errors.isbn && (
                    <p className="text-sm text-red-600">
                      {errors.isbn.message}
                    </p>
                  )}
                </div>

                {/* Pages */}
                <div className="space-y-2">
                  <label
                    htmlFor="pages"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Pages
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="pages"
                      type="number"
                      {...register("pages")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Number of Pages"
                    />
                  </div>
                  {errors.pages && (
                    <p className="text-sm text-red-600">
                      {errors.pages.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="category_id"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <Info className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="category_id"
                      {...register("category_id")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.category_id && (
                    <p className="text-sm text-red-600">
                      {errors.category_id.message}
                    </p>
                  )}
                </div>

                {/* Publisher */}
                <div className="space-y-2">
                  <label
                    htmlFor="publisher_id"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Publisher
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="publisher_id"
                      {...register("publisher_id")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="">Select a publisher</option>
                      {publishers.map((pub) => (
                        <option key={pub.id} value={pub.id}>
                          {pub.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.publisher_id && (
                    <p className="text-sm text-red-600">
                      {errors.publisher_id.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <label
                  htmlFor="summary"
                  className="text-sm font-semibold text-gray-700"
                >
                  Summary
                </label>
                <textarea
                  id="summary"
                  {...register("summary")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="A brief summary of the book..."
                ></textarea>
                {errors.summary && (
                  <p className="text-sm text-red-600">
                    {errors.summary.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <Link
                  href="/shop"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
