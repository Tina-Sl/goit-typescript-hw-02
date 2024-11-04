import { Image } from "../../services/types";
import { FC } from "react";

import s from "./ImageCard.module.css";

interface ImageCardProps {
  imgItem: Image;
}

const ImageCard: FC<ImageCardProps> = ({ imgItem }) => {
  const alt = imgItem.alt_description;
  const src = imgItem.urls.small;
  const author = imgItem.user.name;
  const location = imgItem.user.location;

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
