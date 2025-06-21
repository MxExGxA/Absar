import Link from "next/link";

const BlogFooter = () => {
  return (
    <div className="absolute bottom-0 w-full h-20 bg-lemon-green flex items-center justify-center">
      <p className="text-nowrap text-center text-sm sm:text-[16px] font-jf text-light-green">
        © 2025 جميع الحقوق محفوظة – أبصر
        <br />
        <Link
          target="_blank"
          className="font-bold hover:opacity-80"
          href={
            "https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"
          }
        >
          بواسطـــة Elsayed Elghazy
        </Link>
      </p>
    </div>
  );
};

export default BlogFooter;
