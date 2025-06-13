import LargeCard from "./components/LargeCard";
import largeCardsData from "../constants/largeCardsData";

const LargeCards = () => {
  return (
    <div>
      {largeCardsData.map((cardData) => (
        <LargeCard
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
