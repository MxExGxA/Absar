import Image from "next/image";

const TextureOverlay = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <Image
        src={"/fabric-texture.png"}
        alt="fabric texture image"
        fill
        objectFit="cover"
        className="z-50 mix-blend-soft-light opacity-25 pointer-events-none"
        unoptimized
        quality={100}
      />
      {children}
    </div>
  );
};

export default TextureOverlay;
