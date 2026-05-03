"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const BookDetailsBTN = ({ book, user }) => {
  console.log(book, user);
  const router = useRouter();
  const handleBrowsing = () => {
    if (user) {
      toast.success(`Request for sent "${book?.title}"`, {
        position: "top-center",
        autoClose: 2000,
      });
    }else{
        const currentPath = window.location.pathname;

        router.push(`/login?callbackUrl=${currentPath}`)
    }
  };

  return (
    <div>
      <Button
        onClick={handleBrowsing}
        className="w-full font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-md hover:opacity-90"
      >
        Borrow This Book
      </Button>
    </div>
  );
};

export default BookDetailsBTN;
