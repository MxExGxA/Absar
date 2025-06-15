"use client";
import { MdContentCopy } from "react-icons/md";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const CopyAddress = () => {
  const handleCopyLocation = () => {
    navigator
      ?.clipboard!.writeText(
        "https://maps.app.goo.gl/hq8qkJDnUPvUZ43x5"
      )
      .then(() => {
        toast(<p className="font-jf">تم نسخ العنوان</p>, {
          style: { backgroundColor: "#b8d900" },
        });
      })
      .catch(() => {
        toast.error(
          <p className="font-jf">حدث خطأ أثناء النسخ</p>,
          {}
        );
      });
  };

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.9 }}
      className="bg-dark-green font-jf text-lemon-green flex items-center space-x-4 text-sm m-1 p-2 rounded-sm cursor-pointer"
      onClick={handleCopyLocation}
    >
      <p className="text-nowrap">نسخ العنوان</p>
      <MdContentCopy className="text-xl" />
    </motion.div>
  );
};

export default CopyAddress;
