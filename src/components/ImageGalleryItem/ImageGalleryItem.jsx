// import PropTypes from 'prop-types';
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
    // <li className={style.list}>
    //   <div>
    //     <span className={style.name}>{name}:</span>
    //     <span className={style.number}>{number}</span>
    //   </div>
    //   <button
    //     className={style.button}
    //     type="button"
    //     onClick={() => onDelete(id)}
    //   >
    //     Delete
    //   </button>
    // </li>
  );
};

// Contact.prototype = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   id: PropTypes.string,
// };

export default GalleryItem;
