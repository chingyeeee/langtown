import CardContentList from "./CardContentList";
import SingleImage from "./SingleImage";

const Card = (props) => {
  const { item, carouselCard } = props;

  return (
    <div className={carouselCard}>
      <div className="carouselCard-image">
        <SingleImage item={item} />
      </div>
      <CardContentList item={item} />
    </div>
  );
};

export default Card;
