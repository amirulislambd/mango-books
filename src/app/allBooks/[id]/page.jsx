import BookDetailsBTN from "@/components/home/books/BookDetailsBTN";
import { auth } from "@/lib/auth";
import { getData, getDataDetails } from "@/lib/dataFetch";
import { Button, Card, CardFooter, CloseButton } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaStar,
  FaBookOpen,
  FaCalendarAlt,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(param)
  const books = await getDataDetails(id);

  console.log(id, books);
const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
 

  return (
    <div>
      {books.map((book, i) => (
        <div key={i}>
          <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-md items-center justify-center">
            <div className="flex-1 space-y-2">
              <div className="relative aspect-auto w-full overflow-hidden rounded-xl ">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={500}
                  height={500}
                  className="object-cover transition-all duration-300 hover:scale-105 mx-auto w-full"
                />

                <div className="border"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 ">
              <Card.Header className="gap-1">
                <Card.Content>
                  <div className="grid grid-cols-2  gap-4 items-center text-black my-6">
                    <div className="bg-orange-50 border border-orange-100 p-2 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaStar className="text-orange-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Rating
                      </span>
                      <span className="text-lg font-bold text-orange-700">
                        {book.rating}
                      </span>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-2 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaStar className="text-green-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Price
                      </span>
                      <span className="text-lg font-bold text-green-700">
                        {book.price}
                      </span>
                    </div>
                  </div>
                </Card.Content>

               
                <Card.Content className="space-y-2">
                  <h1 className="pr-8 font-bold text-xl md:text-4xl lg:text-5xl text-black">
                    {book.title}
                  </h1>
                  <Card.Title className="pr-8 text-xl flex flex-col gap-1">
                    <span className="font-bold text-lg md:text-xl uppercase ">
                      Design Systems
                    </span>{" "}
                    By {book.author}
                  </Card.Title>
                </Card.Content>

                <Card.Content>
                  <span className="flex items-center j gap-2 my-5 bg-gray-100 p-2 rounded-lg justify-center">
                   
                    {book.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block text-black text-lg font-semibold px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </Card.Content>

                <div className="text-lg text-black  gap-4">
                  <div className="flex items-center gap-4 flex-col md:flex-row text-center md:text-left border p-4 rounded-lg">
                    <div className="border-4 border-zinc-100 bg-white shadow-md p-1 rounded-full">
                      <Image
                        width={300}
                        height={300}
                        src={book.author_image}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{book.author}</p>
                      <p className="text-lg">{book.author_bio}</p>
                    </div>
                  </div>
                </div>

                <Card.Content>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Available Copies: {book.available_copies}
                    </h3>
                  </div>
                </Card.Content>
              </Card.Header>
              <CardFooter >
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4  gap-4 items-center text-black ">
                   
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaBookOpen className="text-blue-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Pages
                      </span>
                      <span className="text-lg font-bold text-blue-700">
                        {book.pages}
                      </span>
                    </div>

                    
                    <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaCalendarAlt className="text-green-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Published
                      </span>
                      <span className="text-lg font-bold text-green-700">
                        {book.publish_date}
                      </span>
                    </div>

                    
                    <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaBuilding className="text-purple-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Publisher
                      </span>
                      <span className="text-lg font-bold text-purple-700 truncate w-full px-1">
                        {book.publisher}
                      </span>
                    </div>

                    
                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                      <FaGlobe className="text-indigo-500 text-xl mb-2" />
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                        Language
                      </span>
                      <span className="text-lg font-bold text-indigo-700">
                        {book.language}
                      </span>
                    </div>
                  </div>
                  <div>
                    
                     <BookDetailsBTN book={book} user={user}/>
                    
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
