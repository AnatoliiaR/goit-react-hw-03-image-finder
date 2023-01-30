import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const GalleryItem = ({ tags, src, largeImageURL, showImg }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => showImg({ largeImageURL })}
    >
      <img
        className={style.ImageGalleryItemImage}
        src={src}
        alt={tags}
        largeImageURL={largeImageURL}
      />
    </li>
  );
};

GalleryItem.prototype = {
  tags: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  showImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default GalleryItem;
