import s from "./ImageCard.module.css";

const ImageCard = ({ alt, src, author, location }) => {
  return (
    <div>
      <img className={s.imgCard} src={src} alt={alt} />
      <span className={s.imgTitle}>
        Author: {author} {location}
      </span>
    </div>
  );
};

export default ImageCard;
