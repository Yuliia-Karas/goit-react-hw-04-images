import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import { pixabayApi } from './api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends React.Component {
  state = {
    name: '',
    images: null,
    data: [],
    page: 1,
    isLoading: false,
    isShowLoadMore: false,
    error: null,
    perPage: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { name, page, perPage } = this.state;
    const prevPage = prevState.page;
    const prevName = prevState.name;
    const prevImages = prevState.images;

    if (prevName !== name || prevPage !== page) {
      try {
        this.setState({ isLoading: true });

        const { totalHits, hits } = await pixabayApi(name, page, perPage);

        if (totalHits === 0) {
          toast.error(`Sorry, there are no pictures on request ${name}`);
          this.setState({ isLoading: false, isShowLoadMore: false });
        } else {
          this.setState(prev => ({
            images: page === 1 ? hits : [...prevImages, ...hits],
            isShowLoadMore: page < Math.ceil(totalHits / perPage),
          }));

          this.setState({ isLoading: false });
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  handleSubmit = name => {
    this.setState({ page: 1, images: null, name });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {!this.state.name && (
          <div
            style={{
              textAlign: 'center',
              color: 'GrayText',
            }}
          >
            enter text for search
          </div>
        )}
        <ImageGallery imageGalleryItems={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.isShowLoadMore && <Button onClick={this.handleLoadMore} />}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}

export default App;
