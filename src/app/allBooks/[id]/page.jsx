import BookDetailsBTN from "@/components/home/books/BookDetailsBTN";
import { auth } from "@/lib/auth";
import { getDataDetails } from "@/lib/dataFetch";
import { Card} from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import {
  FaStar,
  FaBookOpen,
  FaCalendarAlt,
  FaBuilding,
  FaGlobe,
  FaTag,
} from "react-icons/fa";

export async function generateMetadata({ params }) {

  const { id } = await params;


  console.log("Fetching Metadata for ID:", id);

  const books = await getDataDetails(id);
  
  
  const book = books && books.length > 0 ? books[0] : null;

  if (!book) {
    return {
      title: "Book Not Found | MangoBooks",
      description: "This book might have been removed or is unavailable."
    };
  }

  return {
    title: `${book.title} by ${book.publisher} | MangoBooks`,
    description: `${book.title} is a ${book.category} book. Edition: ${book.edition}. Available in ${book.format}.`,
    keywords: book.tags.join(", "),

    icons: {

      icon: book?.image_url || book?.image || "/favicon.ico", 
      apple: book?.image_url || book?.image || "/apple-touch-icon.png",
    },

    openGraph: {
      title: book.title,
      description: `Explore ${book.title} on MangoBooks. Price: $${book.price}`,
      images: [{ url: book.image_url }],
      type: 'book',
    },
    twitter: {
      card: 'summary_large_image',
      title: book.title,
      images: [book.image_url],
    }
  };
}


const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const books = await getDataDetails(id);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      {books.map((book, i) => (
        <Card key={i} className="bg-white shadow-2xl rounded-[32px] overflow-hidden border-none">
          <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-12">
            
            {/* Left Side: Image Section */}
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                {book.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                    {book.discount}% OFF
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Content Section */}
            <div className="w-full lg:w-3/5 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {book.category}
                    </span>
                    <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-xs font-bold">
                      <FaStar /> {book.rating}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                    {book.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-500 mt-2 font-medium">
                    By <span className="text-indigo-600 italic underline underline-offset-4 cursor-pointer">{book.author}</span>
                  </p>
                </div>

                {/* Price & Stock Section */}
                <div className="flex items-center gap-6 py-4 border-y border-slate-100">
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">${(book.price - (book.price * book.discount / 100)).toFixed(2)}</span>
                      {book.discount > 0 && (
                        <span className="text-lg text-slate-400 line-through">${book.price}</span>
                      )}
                    </div>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-200"></div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Stock</p>
                    <p className={`text-xl font-bold ${book.available_quantity > 0 ? 'text-green-600' : 'text-red-500'}`}>
                      {book.available_quantity > 0 ? `${book.available_quantity} copies left` : 'Out of Stock'}
                    </p>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag, index) => (
                    <span key={index} className="flex items-center gap-1 bg-slate-50 text-slate-600 px-3 py-1 rounded-lg text-sm font-semibold border border-slate-200 hover:bg-slate-100 transition-colors">
                      <FaTag className="text-[10px]" /> {tag}
                    </span>
                  ))}
                </div>

                {/* Grid Info Boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <InfoBox icon={<FaBookOpen />} label="Pages" value={book.pages} color="blue" />
                  <InfoBox icon={<FaCalendarAlt />} label="Published" value={book.publish_date.split('-')[0]} color="green" />
                  <InfoBox icon={<FaBuilding />} label="Publisher" value={book.publisher} color="purple" />
                  <InfoBox icon={<FaGlobe />} label="Language" value={book.language} color="indigo" />
                </div>
              </div>

              {/* Author Info Card */}
              <div className="mt-8 bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={book.author_image || "https://i.ibb.co/8n2t7ZrH/Gemini-Generated-Image-4oen5a4oen5a4oen.png"}
                    alt={book.author}
                    fill
                    className="rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{book.author}</p>
                  <p className="text-sm text-slate-500 italic line-clamp-1 hover:line-clamp-none transition-all duration-500 ease-in-out hover:scale-[1.02] hover:text-slate-700  origin-top cursor-help">{book.author_bio || "Professional Tech Author"}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <BookDetailsBTN book={book} user={user} />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// Helper Component for Info Boxes
const InfoBox = ({ icon, label, value, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
  };

  return (
    <div className={`${colors[color]} border p-3 rounded-2xl flex flex-col items-center text-center transition-all hover:shadow-md`}>
      <span className="text-xl mb-1">{icon}</span>
      <span className="text-[10px] font-black uppercase opacity-60 tracking-tighter">{label}</span>
      <span className="text-sm font-bold truncate w-full">{value}</span>
    </div>
  );
};

export default DetailsPage;