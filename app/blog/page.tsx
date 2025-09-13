import Link from "next/link";
import React from "react";

export const posts = [
  {
    id: "1",
    name: "tomi",
    post: "tefugygduhgdhsafgsidhfgjhdsagfjafgjoagfjoasfjasfjagsfjoagsfjogajosfjoasgfojagsfjogajosfgjoagsfjoagsfjogafafgagfgfjgafjgaf",
  },
  {
    id: "2",
    name: "john",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "sarah",
    post: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "4",
    name: "mike",
    post: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "5",
    name: "emma",
    post: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const page = () => {
  return (
    <div>
      {posts.map((i, index) => (
        <div key={index}>
          <Link href={`/blog/${i.id}`}>
            {" "}
            <p>{i.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
