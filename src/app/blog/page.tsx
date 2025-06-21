import ArticleCard from "./components/ArticleCard";
import axios from "axios";
import { articleType } from "./types/Article";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "المدونة",
    description: "مدونة ابصر | كل ما يخص أنظمة الأمان والمراقبة",
    openGraph: {
      title: "المدونة",
      description: "مدونة ابصر | كل ما يخص أنظمة الأمان والمراقبة",
    },
  };
}

const page = async () => {
  const result = await axios.get(
    `${process.env.STRAPI_URI}/api/article?populate=cover`
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
