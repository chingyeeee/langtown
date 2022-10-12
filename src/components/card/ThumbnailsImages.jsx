import { Carousel } from "react-carousel-minimal";

const ThumbnailsImages = (props) => {
  const { image } = props;

  return (
    <Carousel
      data={image}
      width="850px"
      radius="10px"
      slideNumber={false}
      automatic={false}
      dots={false}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="none"
      slideImageFit="cover"
      thumbnails={true}
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        maxWidth: "850px",
        maxHeight: "500px",
      }}
    />
  );
};

export default ThumbnailsImages;
