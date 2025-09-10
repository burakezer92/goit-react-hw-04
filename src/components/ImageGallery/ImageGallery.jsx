import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery(props) {
  props.ka(props.regular);
  return (
    <ul>
      {props.imageList.map((image) => (
        <ImageCard
          o={props.o}
          key={image.id}
          src={image.urls.small}
          description={image.description}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
