"use client";
import {
  BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

const BlockContainer = ({ data }) => {
  return (
    <BlocksRenderer
      content={data.data[0].content as BlocksContent}
      blocks={{
        image: ({ image }) => {
          console.log(image.formats?.large);
          return (
            <Image
              src={
                (process.env.STRAPI_URI +
                  image.formats?.large?.["url"]) as string
              }
              alt={image.name}
              width={1000}
              height={0}
              className="w-full"
            />
          );
        },
      }}
    />
  );
};

export default BlockContainer;
