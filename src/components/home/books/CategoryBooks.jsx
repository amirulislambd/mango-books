"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  GiOverInfinity,
  GiMicrochip,
  GiWhiteBook,
  GiMaterialsScience,
} from "react-icons/gi";

const categories = ["All", "Tech", "Story", "Science"];

const CategoryBooks = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  console.log("activeCategory", activeCategory);
  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category && category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/allBooks?${params.toString()}`);
  };

  const renderIcon = (cat) => {
    switch (cat) {
      case "All":
        return <GiOverInfinity className="text-xl" />;
      case "Tech":
        return <GiMicrochip className="text-xl" />;
      case "Story":
        return <GiWhiteBook className="text-xl" />;
      case "Science":
        return <GiMaterialsScience className="text-xl" />;
      default:
        return <GiOverInfinity />;
    }
  };

  return (
    <div className="fixed left-0 top-20 lg:top-6 h-[calc(100vh-80px)] w-44 md:w-56 lg:w-64 bg-[#0f111a]/80 border-r-2  border-white/10 transition-all duration-300  px-4">
      <div className="flex flex-col w-full gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`relative group flex items-center justify-start gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-lg shadow-indigo-500/40 scale-105"
                : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <span className="flex-shrink-0">{renderIcon(cat)}</span>
            <span className="block whitespace-nowrap">{cat}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
