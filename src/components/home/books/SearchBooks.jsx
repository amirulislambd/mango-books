'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState} from "react";

const SearchBooks = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [searchText, setSearchText] = useState(searchParams.get("search") || "");


    const handleSearch = (e) => {
        e.preventDefault()
        
        const params = new URLSearchParams(searchParams.toString());
        
        if (searchText) {
            params.set("search", searchText);
        } else {
            params.delete("search");
        }

        router.push(`/allBooks?${params.toString()}`);
    };

    return (
        <form 
            onSubmit={handleSearch} 
            className="w-full md:max-w-lg flex relative mx-auto"
        >
            <input
                type="text"
                placeholder="Search books by title or author..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition-all duration-300"
            />

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
    );
};

export default SearchBooks;