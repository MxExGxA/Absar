import Image from "next/image";

const HeroCard = ({
  number,
  title,
  image,
}: {
  number: string;
  title: string[];
  image: string;
}) => {
  return (
    <div className="relative w-[170px] h-[206px] sm:w-[208px] sm:h-[244px]">
      {/* card sci-fi shapes */}
      <Image
        src={"/card-scifi-col.svg"}
        alt="card sci-fi column shape"
        height={0}
        width={3}
        className="absolute left-[6px] top-4 z-10 w-auto"
      />
      <Image
        src={"/card-scifi-col.svg"}
        alt="card sci-fi column shape"
        height={0}
        width={3}
        className="absolute right-3 bottom-3 z-10"
      />

      {/* card background image */}
      <Image
        src={"/hero-card.svg"}
        alt="card background"
        fill
        className="absolute top-0 left-0"
        unoptimized
        quality={100}
      />
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="flex justify-center mt-6">
          <h2 className="absolute font-jf text-[80px] sm:text-[120px] text-dark-green opacity-20 leading-[90px]">
            {number}
          </h2>
          <h3 className="font-ghaith mt-4 text-light-green text-2xl sm:text-[28px] leading-7">
            {title[0]}
            <br />
            {title[1]}
          </h3>
        </div>
        <Image
          src={image}
          alt="card image"
          width={100}
          height={0}
          className="absolute bottom-4 w-[80%]"
        />
      </div>
    </div>
  );
};

export default HeroCard;
