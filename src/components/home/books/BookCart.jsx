import { Button, Card, CardFooter, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCart = ({ book }) => {
  const { id, title, author, category, image_url } = book;
//   console.log(book);
  return (
    <div>
      <Card className="w-full items-stretch flex-col gap-4 p-4">
        <div className="relative aspect-auto w-full overflow-hidden rounded-xl">
          <Image
            src={image_url}
            alt={title}
            
            width={500}
            height={500}
            className="object-cover transition-all duration-300 hover:scale-105 mx-auto"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 font-bold text-lg md:text-xl uppercase">
              {category}
            </Card.Title>
            <Card.Title className="pr-8 font-bold text-lg md:text-xl text-gray-500">{title}</Card.Title>
            <Card.Description className="text-lg">{author}</Card.Description>
          </Card.Header>
          <CardFooter className="p-4">
          <Link href={`/allBooks/${id}`} className="w-full">
            <Button 
              className="w-full font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-md hover:opacity-90"
            >
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
