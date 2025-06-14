import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex items-center space-x-6 ml-auto mb-10">
        <div className="w-[10px] h-28 bg-gradient-to-b from-lemon-green to-[#b8d9009d]"></div>
        <div className="font-ghaith flex flex-col items-start space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl">
            تواصـــل معنا
          </h1>
          <h3 className="text-lemon-green text-xl sm:text-2xl">
            راسلــنا فـي أي وقــت أو قـم بزيــارتنا
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
