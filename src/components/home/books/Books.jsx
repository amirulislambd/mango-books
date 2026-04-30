import { getData } from '@/lib/dataFetch';
import React from 'react';
import BookCart from './BookCart';

const Books = async() => {
    const books = await getData()
    // console.log(books)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                books.slice(0,4).map(book=><BookCart key={book.id}  book={book}/>)
            }
        </div>
    );
};

export default Books;