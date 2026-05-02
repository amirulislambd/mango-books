"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const categories = ["All", "Tech", "Story", "Science"];

const SearchBook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || "",
  );
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "All",
  ); 

  const updateURL = (category, search) => {
    const params = new URLSearchParams();
    if (category && category !== "All") {
      params.set("category", category);
    }
    if(search){
        params.set('search',search)
    }

    router.push(`/allBooks?${params.toString()}`)

  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateURL(activeCategory, searchText);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    updateURL(category, searchText);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-5 py-6">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="w-full relative">
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-5 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition-all duration-300"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                : "bg-white/5 text-gray-300 border-white/15 hover:bg-white/10 hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBook;
