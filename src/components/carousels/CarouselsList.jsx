import Card from "../card/Card";

const CarouselsList = ({ data }) => {
  return (
    <div className="carousel-list">
      {data.map((item, index) => {
        return <Card item={item} carouselCard={"carouselCard"} key={index} />;
      })}
    </div>
  );
};

export default CarouselsList;
