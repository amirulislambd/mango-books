import { Button, Card, CardFooter, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCart = ({ book }) => {
  const { id, title, author, category, image_url } = book;
  //   console.log(book);
  return (
    <div>
      <Card className="w-full items-stretch flex-col gap-4 p-1 bg-purple-400/10 border-2 border-white/10">
        <div className="relative h-56 w-full object-cover overflow-hidden rounded-xl">
          <Image
            src={image_url}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        {book.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
            {book.discount}% OFF
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 px-4">
          <Card.Header className="gap-1">
           <div className="flex items-center justify-between">
           <Card.Title className="pr-8 font-bold text-lg md:text-xl uppercase text-white">
              {category}
            </Card.Title>
              <div className="flex items-center gap-6 py-4  ">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900 text-white">${(book.price - (book.price * book.discount / 100)).toFixed(2)}</span>
                      {book.discount > 0 && (
                        <span className="text-lg text-slate-400 line-through">${book.price}</span>
                      )}
                    </div>
                  </div>
                  
                </div>
           </div>
            <Card.Title className="pr-8 font-bold text-lg md:text-xl text-gray-500 line-clamp-1">
              {title}
            </Card.Title>
            <Card.Description className="text-lg line-clamp-1">
              {author}
            </Card.Description>
          </Card.Header>
          <CardFooter className="p-4">
            <Link href={`/allBooks/${id}`} className="w-full">
              <Button className="w-full font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-md hover:opacity-90">
              View Details
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default BookCart;
