import Image from "next/image";

const InsightCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="icon relative w-[44px] h-[44px] lg:w-[55px] lg:h-[55px]">
        <Image src={icon} alt="icon image" fill />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lemon-green font-ghaith text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="text-white font-jf text-[15px]">{desc}</p>
      </div>
    </div>
  );
};

export default InsightCard;
