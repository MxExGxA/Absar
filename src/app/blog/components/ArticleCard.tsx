import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { articleType } from "../types/Article";

const ArticleCard = ({
  data,
  type,
}: {
  data: articleType;
  type: "large" | "small";
}) => {
  const articleLink = `/blog/${data.title
    .trim()
    .replaceAll(" ", "-")}`;
  return (
    <Link
      replace
      href={`${articleLink}`}
      className={`relative bg-light-green rounded-md max-md:!col-span-1 flex flex-col overflow-hidden hover:md:scale-[1.03] transition-transform duration-300
        ${type === "large" && "col-span-2"}`}
    >
      <div
        className={`${type === "small" && "relative"} w-full h-52`}
      >
        {type === "large" && (
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>
        )}
        <Image
          src={data.cover.url}
          alt="article cover"
          fill
          className="object-cover w-full"
        />
      </div>
      <div className="text-white py-5 px-5 flex flex-col font-jf z-20">
        <div
          className={`flex items-center flex-wrap gap-2 lg:gap-4 pb-4 text-sm`}
        >
          <div className="flex items-center gap-1">
            <FaRegUser />
            <p>{data.author}</p>
          </div>
          <div className="flex items-center gap-1">
            <GiDuration />
            <p>{data.duration} دقائق</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock />
            <p>{data.createdAt.split("T")[0]}</p>
          </div>
        </div>
        <div>
          <h1 className="font-ghaith text-lg line-clamp-1 mb-2">
            {data.title}
          </h1>
          <p className="line-clamp-3">{data.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
