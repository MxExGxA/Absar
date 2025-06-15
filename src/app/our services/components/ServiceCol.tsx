import React from "react";

const ServiceCol = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-5 flex flex-col items-center space-y-8 2xl:space-y-16">
      {children}
    </div>
  );
};

export default ServiceCol;
