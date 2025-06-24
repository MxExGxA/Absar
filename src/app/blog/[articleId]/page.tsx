import { redirect } from "next/navigation";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import ArticleCard from "../components/ArticleCard";
import { articleType } from "../types/Article";
import { Metadata } from "next";
import axiosInstance from "@/app/lib/axios";
import BlockContainer from "../components/BlockContainer";
import keywords from "@/app/constants/MetaKeywords";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}): Promise<Metadata> {
  const { articleId } = await params;

  const decoded = decodeURIComponent(articleId);
  const encoded = encodeURIComponent(decoded.replaceAll("-", " "));

  const result = await axiosInstance.get(
    `/api/article?filters[title][$eq]=${encoded}&populate=cover`
  );
  const article = await result.data;

  return {
    title: article.data[0].title,
    description: article.data[0].description,
    keywords: keywords,
    openGraph: {
      title: article.data[0].title,
      description: article.data[0].description,
      images: [
        {
          url: `${process.env.STRAPI_URI}${article.data[0]?.cover?.url}`,
          width: 1200,
          height: 630,
          alt: article.data[0].title,
        },
      ],
      type: "article",
      url: `https://absar.sa/blog/${decoded}`,
    },
    alternates: {
      canonical: `https://absar.sa/blog/${decoded}`,
    },
  };
}

const page = async ({ params }) => {
  const { articleId } = await params;

  const decoded = decodeURIComponent(articleId).replaceAll("-", " ");
  const encoded = encodeURIComponent(decoded);

  const result = await axiosInstance.get(
    `/api/article?filters[title][$eq]=${encoded}`
  );
  const article = await result.data;

  if (!article.data.length) {
    redirect("/blog");
  }

  const result2 = await axiosInstance.get(
    `/api/article?populate=cover`
  );
  const articles = await result2.data;

  return (
    <section className="container mx-auto py-10 px-3 font-jf flex items-start justify-between flex-col xl:flex-row">
      <div className="max-w-[800px] 2xl:max-w-[1000px] prose prose-green prose-strong:text-white prose-a:font-bold prose-headings:text-lemon-green prose-ul:text-white prose-ol:text-white prose-li:marker:text-white prose-img:max-h-96 prose-img:w-full prose-img:rounded-md prose-img:object-cover prose-blockquote:text-neutral-300 prose-img:cover prose-p:text-white">
        <h1 className="text-white font-ghaith text-2xl lg:text-3xl">
          {article.data[0].title}
        </h1>
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
        <BlockContainer data={article} />
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
