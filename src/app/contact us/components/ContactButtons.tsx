import Button from "@/app/components/Button";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const ContactButtons = () => {
  return (
    <>
      <Button
        icon={<IoIosCall className="text-xl sm:text-2xl" />}
        label={"إتصل بنا"}
        type="primary"
        navigate="tel:966558455133"
      />
      <Button
        icon={<FaWhatsapp className="text-xl sm:text-2xl" />}
        label="واتساب"
        type="secondary"
        navigate="https://api.whatsapp.com/send?phone=966558455133"
      />
    </>
  );
};

export default ContactButtons;
