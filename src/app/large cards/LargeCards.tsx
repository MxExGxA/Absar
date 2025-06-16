import LargeCard from "./components/LargeCard";
import largeCardsData from "../constants/largeCardsData";

const LargeCards = () => {
  return (
    <div className="bg-lemon-green xl:bg-transparent py-10 rounded-xl shadow-none md:shadow-[6px_-6px_0_#326149] xl:shadow-none">
      {largeCardsData.map((cardData) => (
        <LargeCard
          id={cardData.number}
          key={cardData.number}
          number={cardData.number}
          title={cardData.title}
          desc={cardData.desc}
          image={cardData.image}
          direction={cardData.direction}
        />
      ))}
    </div>
  );
};

export default LargeCards;
