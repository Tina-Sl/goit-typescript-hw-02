import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.imgGallery}>
      {images.map((img) => (
        <li
          className={s.imgItem}
          key={img.id}
          onClick={() => onImageClick(img)}
        >
          <ImageCard
            alt={img.alt_description}
            src={img.urls.small}
            author={img.user.name}
            location={img.user.location}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
