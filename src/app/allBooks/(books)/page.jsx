import BookCart from "@/components/home/books/BookCart";

import { getData } from "@/lib/dataFetch";

import { FaBookOpen } from "react-icons/fa";

export const metadata = {
  title: "All Books | MangoBooks Digital Library",
  description:
    "Browse our extensive collection of tech, science, and literature books. Find your next favorite read today.",
};

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

    return matchCategory && matchSearch;
  });
  // --- SEO Structured Data (ItemList) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": books.length,
    "itemListElement": books.slice(0, 10).map((book, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://your-domain.com/allBooks/${book.id}`,
      "name": book.title,
    })),
  };
 
   return (
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex items-center justify-center">
        {/* <SearchBook /> */}
      </div>

      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <FaBookOpen className="text-2xl md:text-4xl lg:text-6xl text-gray-400" />
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
