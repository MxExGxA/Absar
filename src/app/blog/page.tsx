import ArticleCard from "./components/ArticleCard";
import { articleType } from "./types/Article";
import { Metadata } from "next";
import axiosInstance from "../lib/axios";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "مدونة أبصر | أنظمة الأمان والمراقبة",
    description: "مدونة ابصر | كل ما يخص أنظمة الأمان والمراقبة",
    openGraph: {
      title: "المدونة",
      description: "مدونة ابصر | كل ما يخص أنظمة الأمان والمراقبة",
      url: "https://absar.sa/blog",
      locale: "ar_SA",
      type: "website",
      images: [
        {
          url: "https://absar.sa/og-image.png",
          width: 1200,
          height: 630,
          alt: "أبصر - أنظمة المراقبة والأمان",
        },
      ],
    },
    alternates: { canonical: "https://absar.sa/blog" },
  };
}

const page = async () => {
  const result = await axiosInstance.get(
    `/api/article?populate=cover`
  );
  const articles = await result.data;
  console.log(articles);

  return (
    <section className="px-3 md:px-10" id="contact">
      <div className="text-white flex flex-col justify-center items-center gap-4 pb-5">
        <h1 className="text-4xl font-ghaith">مــدونــة أبـصــــر</h1>
        <p className="text-xl font-jf">
          آخر الأخبار عن أنظمة الأمان والمراقبة
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-10">
        {articles?.data.map((article: articleType, index: number) => (
          <ArticleCard
            key={article.id}
            data={article}
            type={index === 0 ? "large" : "small"}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
