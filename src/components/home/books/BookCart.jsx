import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BookCart = ({ book }) => {
  const { id, title, author, category, image_url } = book;
  console.log(book);
  return (
    <div>
      <Card className="w-full items-stretch flex-col gap-4 p-4">
        <div className="  overflow-hidden rounded-lg  mx-auto  ">
          <Image
            src={image_url}
            alt={title}
            width={500}
            height={500}
            className="rounded-lg "
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 font-bold text-lg md:text-xl uppercase">
              {category}
            </Card.Title>
            <Card.Title className="pr-8 font-bold text-lg md:text-xl text-gray-500">{title}</Card.Title>
            <Card.Description className="text-lg">{author}</Card.Description>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-indigo-100 to-blue-500 text-black">Viw Details</Button>
          </Card.Header>
        </div>
      </Card>
    </div>
  );
};

export default BookCart;
