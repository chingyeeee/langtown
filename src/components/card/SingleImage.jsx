const SingleImage = ({ item }) => {
  const { image, name } = item;

  return (
    <div className="card-image">
      <img src={image[0].image} alt={name} />
    </div>
  );
};

export default SingleImage;
