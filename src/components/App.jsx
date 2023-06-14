import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { pixabayApi } from './api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css';

const App = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  // const [error, setError] = useState(null);
  const perPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { totalHits, hits } = await pixabayApi(name, page, perPage);

        if (totalHits === 0) {
          toast.error(`Sorry, there are no pictures on request ${name}`);
          setIsLoading(false);
          setIsShowLoadMore(false);
        } else {
          setImages(prevImages =>
            page === 1 ? hits : [...prevImages, ...hits]
          );
          setIsShowLoadMore(page < Math.ceil(totalHits / perPage));
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    if (name !== '' || page !== 1) {
      fetchData();
    }
  }, [name, page, perPage]);

  const handleSubmit = newName => {
    setPage(1);
    setImages(null);
    setName(newName);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className= {css.App}
     
    >
      <Searchbar onSubmit={handleSubmit} />
      {!name && (
        <div className={css.text}
          
        >
          enter text for search
        </div>
      )}
      <ImageGallery imageGalleryItems={images} />
      {isLoading && <Loader />}
      {isShowLoadMore && <Button onClick={handleLoadMore} />}
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
};

export default App;
