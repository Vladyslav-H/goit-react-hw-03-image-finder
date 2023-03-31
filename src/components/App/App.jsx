import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosImg } from 'services/pixabayapi';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  //  getSnapshotBeforeUpdate() {
  //       return document.body.clientHeight;
  //   }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // window.scrollTo({
    //   top: snapshot,
    //   behavior: 'smooth',
    // });
    const { searchName, page } = this.state;

    if (
      prevState.searchName !== searchName ||
      (prevState.page !== page && page > 1)
    ) {
      this.setImages();
    }
  }

  setImages = async () => {
    const { searchName, page } = this.state;

    this.setState({ isLoading: true });
    try {
      const data = await axiosImg(searchName, page);
      if (!data.length) {
        throw new Error();
      }
      this.setState(prev => ({
        images: page === 1 ? data : [...prev.images, ...data],
      }));
    } catch (error) {
      toast.error('Not find any images. Please, try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        <ToastContainer position="top-center" theme="colored" />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} changePage={this.changePage} />

        {this.state.images.length > 0 && (
          <Button title="Load more" onClick={this.changePage} />
        )}
      </>
    );
  }
}
