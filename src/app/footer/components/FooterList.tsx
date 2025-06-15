const FooterList = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-light-green font-jf text-lg">
      <h2 className="font-ghaith text-2xl 2xl:text-3xl mb-5">
        {title}
      </h2>
      <div className="xl:space-y-1 flex flex-col items-center lg:items-start">
        {children}
      </div>
    </div>
  );
};

export default FooterList;
