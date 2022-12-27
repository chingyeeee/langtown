import { Image } from "../../helpers/layout";

const SingleImage = ({ item }) => {
  const { image, name } = item;

  return (
    <div className="card-image">
      <Image src={image[0].image} alt={name} />
    </div>
  );
};

export default SingleImage;
