import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import s from "./ImageGallery.module.css";
import { Image } from "../../services/types";

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (img: Image) => void;
};

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.imgGallery}>
      {images.map((img) => (
        <li
          className={s.imgItem}
          key={img.id}
          onClick={() => onImageClick(img)}
        >
          <ImageCard imgItem = {img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
