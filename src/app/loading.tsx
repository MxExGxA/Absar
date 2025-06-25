import React from "react";

const loading = () => {
  return (
    <div className="h-lvh w-full absolute top-0 flex justify-center items-center bg-light-green">
      <h2 className="text-3xl lg:text-4xl xl:text-6xl text-white font-ghaith">
        جـاري التحمـيل
      </h2>
    </div>
  );
};

export default loading;
