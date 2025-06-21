import NavButton from "@/app/header/components/NavButton";
import BlogBurger from "./BlogBurger";

const BlogNav = () => {
  const navData = [
    {
      id: 1,
      path: "/",
      title: "الرئيسية",
      selected: false,
    },
    {
      id: 2,
      path: "/blog",
      title: "المدونة",
      selected: true,
    },
  ];

  return (
    <nav
      className={`pt-3 pb-4 flex justify-between items-center px-5 md:px-9 font-jf z-50 backdrop-blur-2xl}`}
    >
      <ul className="navbar hidden md:flex items-center space-x-2 text-white">
        {navData.map((ele) => (
          <NavButton
            key={ele.id}
            path={ele.path}
            title={ele.title}
            selected={ele.selected}
          />
        ))}
      </ul>
      <div></div>
      <BlogBurger />
    </nav>
  );
};

export default BlogNav;
