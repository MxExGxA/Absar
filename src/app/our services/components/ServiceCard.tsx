import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        alt={title}
        width={85}
        height={85}
        className="mb-4 2xl:mb-8 w-16 h-16 2xl:w-20 xl:h-20"
      />
      <h3 className="font-ghaith text-light-green text-lg xl:text-xl 2xl:text-2xl">
        {title}
      </h3>
      <Link
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=966558455133&text= معرفة المزيد عن ${title}`}
        className="font-jf text-light-green text-lg xl:text-xl hover:opacity-80"
      >
        معرفة المزيد
      </Link>
    </div>
  );
};

export default ServiceCard;
