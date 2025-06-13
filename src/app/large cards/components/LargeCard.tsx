import Image from "next/image";

const LargeCard = ({
  direction,
  number,
  title,
  desc,
  image,
}: {
  direction: "left" | "right";
  number: string;
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <div className="relative my-15 h-fit">
      <Image
        src={
          direction === "left"
            ? "/large-card-left.svg"
            : "/large-card-right.svg"
        }
        alt="large card background"
        width={1800}
        height={0}
        className="w-full"
      />

      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 flex items-center justify-between gap-5 ${
          direction === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="relative w-1/2 h-[400px]">
          <Image src={image} alt={title} fill objectFit="contain" />
        </div>
        <div className="w-1/2 h-82 flex flex-col items-start justify-evenly">
          <div className="relative w-fit flex flex-col items-start py-10">
            <h1 className="font-jf text-[150px] 2xl:text-[200px] leading-[200px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {number}
            </h1>
            <h2 className="font-ghaith text-nowrap text-4xl 2xl:text-5xl text-light-green z-10">
              {title}
            </h2>
          </div>
          <p className="font-jf text-light-green text-lg 2xl:text-xl 2xl:leading-9">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
