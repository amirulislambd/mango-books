import BookCart from "@/components/home/books/BookCart";
import SearchBook from "@/components/home/books/SearchBook";
import { getData } from "@/lib/dataFetch";
import { Suspense } from "react";
import { FaBookOpen } from "react-icons/fa";

const AllBooksPage = async ({ searchParams }) => {
  const sp = await searchParams;
  const category = sp?.category || "";
  const search = sp?.search || "";

  const allBooks = await getData();

  console.log(allBooks);

  const books = allBooks.filter((book) => {
    const matchCategory =
      !category || category === "All" || book.category === category;

    const matchSearch =
      !search ||
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch
  });

  return (
    <div>
      <div className="flex items-center justify-center">
        <SearchBook />
      </div>

      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
         <FaBookOpen className="text-2xl md:text-4xl lg:text-6xl "/>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            No books found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or category filter.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 md:my-10">
          {books.map((book) => (
            <BookCart key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooksPage;
