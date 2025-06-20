import axios from "axios";
import { redirect } from "next/navigation";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import ArticleCard from "../components/ArticleCard";
import { articleType } from "../types/Article";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}): Promise<Metadata> {
  const { articleId } = await params;

  const decoded = decodeURIComponent(articleId).replaceAll("-", " ");
  const encoded = encodeURIComponent(decoded);

  const result = await axios.get(
    `${process.env.STRAPI_URI}/api/article?filters[title][$eq]=${encoded}`
  );
  const article = await result.data;

  return {
    title: article.data[0].title,
    description: article.data[0].description,
    openGraph: {
      title: article.data[0].title,
      description: article.data[0].description,
      images: [article.data[0].cover],
    },
  };
}

const page = async ({ params }) => {
  const { articleId } = await params;

  const decoded = decodeURIComponent(articleId).replaceAll("-", " ");
  const encoded = encodeURIComponent(decoded);

  const result = await axios.get(
    `${process.env.STRAPI_URI}/api/article?filters[title][$eq]=${encoded}`
  );
  const article = await result.data;

  if (!article.data.length) {
    redirect("/blog");
  }

  const result2 = await axios.get(
    `${process.env.STRAPI_URI}/api/article?populate=cover`
  );
  const articles = await result2.data;

  return (
    <section className="container mx-auto py-10 px-3 font-jf flex items-start justify-between flex-col xl:flex-row">
      <div className="max-w-[800px] 2xl:max-w-[1000px] prose prose-green prose-headings:text-lemon-green prose-ul:text-white prose-ol:text-white prose-img:max-h-96 prose-img:w-full prose-img:rounded-md prose-img:object-cover prose-blockquote:text-neutral-300 prose-img:cover prose-p:text-white">
        <div className="text-white font-ghaith text-2xl lg:text-3xl">
          {article.data[0].title}
        </div>
        <div
          className={`flex items-center flex-wrap gap-2 lg:gap-4 text-sm text-white *:*:my-2`}
        >
          <div className="flex items-center gap-1 ">
            <FaRegUser />
            <p>{article.data[0].author}</p>
          </div>
          <div className="flex items-center gap-1">
            <GiDuration />
            <p>{article.data[0].duration} دقائق</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock />
            <p>{article.data[0].createdAt.split("T")[0]}</p>
          </div>
        </div>

        <div className="h-[2px] bg-white my-5 rounded-full hidden md:block"></div>
        <BlocksRenderer
          content={article.data[0].content as BlocksContent}
        />
      </div>
      <div className="w-full xl:w-96 flex flex-col gap-5">
        <h2 className="text-white text-2xl">مقالات قد تهمك أيضاً</h2>

        {articles?.data.map((art: articleType, index: number) =>
          index < 6 && art.title !== article.data[0].title ? (
            <ArticleCard key={art.id} data={art} type="small" />
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
};

export default page;
