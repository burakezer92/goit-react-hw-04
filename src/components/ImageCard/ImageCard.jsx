import css from "./ImageCard.module.css";

function ImageCard(props) {

  return (
    <div>
      <img
        className={css.photo}
        onClick={props.o}
        src={props.src}
        alt={props.description}
      />
    </div>
  );
}

export default ImageCard;
