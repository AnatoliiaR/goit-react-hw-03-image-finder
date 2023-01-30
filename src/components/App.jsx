import React, { Component } from 'react';
import style from './App.module.css';
// import axios from 'axios';

import SearchForm from './Searchbar';

import ImageGallery from './ImageGallery';
import GalleryItem from './ImageGalleryItem';
import Modal from 'shared/components/Modal';

import { searchImages } from '../../src/shared/services/api';
// import { ImageGallery } from './ImageGallery';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    search: '',
    showModal: false,
    largeImageURL: '',
    tags: '',
    GalleryItem: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImages(search, page);
      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  // axios;
  // .get(
  //   `https://pixabay.com/api/?q=${search}&page=${page}&key=32280189-3a9b4ba3d5619692d67338181&image_type=photo&orientation=horizontal&per_page=12`
  // )
  //   searchImages(search, page)
  //     .then(data => {
  //       this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
  //     })

  //     .catch(error => {
  //       this.setState({ error: error.message });
  //       console.log(error.message);
  //     })
  //     .finally(() => this.setState({ loading: false }));
  // }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  // showImg = ({ largeImageURL }) => {
  //   this.setState({
  //     GalleryItem: { largeImageURL },
  //     showModal: true,
  //   });
  // };

  showImg = ({ largeImageURL, tags }) => {
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
      showModal: true,
    });
  };

  render() {
    const {
      items,
      loading,
      error,
      largeImageURL,
      showModal,
      GalleryItem,
      tags,
    } = this.state;
    const { searchImages, loadMore, showImg } = this;

    return (
      <div className={style.App}>
        <h1 className={style.title}>
          React homework "Gallery" by Anatoliia Riabchenko
        </h1>
        {/* <ImageGallery items={items} /> */}
        <SearchForm onSubmit={searchImages} />
        <ImageGallery items={items} showImg={showImg} />
        {/* {!items.length && <p>Images not found</p>} */}
        {error && <p>Error</p>}
        {loading && <p>...Loading</p>}
        {Boolean(items.length) && (
          <button onClick={loadMore}>Load more...</button>
        )}
        {showModal && (
          <Modal>
            {/* <GalleryItem {...GalleryItem} /> */}
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}

        {/* <ul>{elements}</ul> */}

        {/* <ul>
          <li key="1">
            <img
              src="https://pixabay.com/get/gcfde0c402bc47ac4bd014eea9ec0fdf96a4a2b1ec8345809cd5485c015ecd4cd06a7c6f64f4eeac8527ac361c0cb1f84_640.jpg"
              alt="tree, cat, silhouette" */}
        {/* /* <ImageGalleryItem */}

        {/* //       id="1"
        //     />
        //   </li> */}
        {/* // </ul> */}
        {/* {loading && <p>...Loading</p>}
        {error && <p>Error</p>} */}
        {/* const elements = items.map(({(id, webformatURL, largeImageURL, tags)})
        => <li key={id}>{webformatURL}</li>
        ); */}
        {/* <ImageGallery items={items} key={id} /> */}
        {/* <ul>{elements}</ul> */}
      </div>
    );
  }
}

export default App;
