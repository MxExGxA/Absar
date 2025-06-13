import Image from "next/image";

const Button = ({
  label,
  type,
}: {
  label: string;
  type: "primary" | "secondary";
}) => {
  const primaryStyle = "text-dark-green";
  const secondaryStyle = "text-lemon-green";

  return (
    <button
      className={`relative cursor-pointer ${
        type === "primary" ? primaryStyle : secondaryStyle
      }`}
    >
      <Image
        src={
          type === "primary"
            ? "/primary-button.svg"
            : "/secondary-button.svg"
        }
        alt="button background"
        width={170}
        height={0}
        className="w-auto"
      />

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </span>
    </button>
  );
};

export default Button;
