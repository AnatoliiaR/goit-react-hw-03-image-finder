import React from 'react';
// import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items, showImg }) => {
  //   <ul>
  //     {items.map(({ id, webformatURL, tags }) => (
  //       <li key={id}>
  //         <img
  //           src={webformatURL}
  //           alt={tags}
  //           /* <ImageGalleryItem */

  //           id={id}
  //         />
  //       </li>
  //     ))}
  //   </ul>
  // const ImageGallery = () => (
  //   <ul>
  //     <li key="1">
  //       <img
  //         src="https://pixabay.com/get/gcfde0c402bc47ac4bd014eea9ec0fdf96a4a2b1ec8345809cd5485c015ecd4cd06a7c6f64f4eeac8527ac361c0cb1f84_640.jpg"
  //         alt="tree, cat, silhouette"
  //         <ImageGalleryItem

  //         id="1"
  //       />
  //     </li>
  //   </ul>
  const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    // <li key={id}>
    <ImageGalleryItem
      key={id}
      alt={tags}
      src={webformatURL}
      largeImageURL={largeImageURL}
      //   onClick={() => showImg({ largeImageURL })}
      showImg={showImg}

      // onDelete={() => onDelete(id)}
      // id={id}
    />
    // </li>
  ));
  return <ul className={style.ImageGallery}>{elements}</ul>;
  // return (
  //   <ul>
  //     {items.map((item, id) => (
  //       <ImageGalleryItem key={id} item={item} />
  //     ))}
  //   </ul>
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
