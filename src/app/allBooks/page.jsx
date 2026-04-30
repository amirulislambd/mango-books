import BookCart from '@/components/home/books/BookCart';
import { getData } from '@/lib/dataFetch';
import React from 'react';

const AllBooksPage =async () => {
    const books = await getData()
    // console.log(books)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 md:my-10'>
            {
                books.map(book=><BookCart key={book.id}  book={book}/>)
            }
        </div>
    );
};

export default AllBooksPage;