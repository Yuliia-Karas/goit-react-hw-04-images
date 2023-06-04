import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import { pixabayApi } from './static/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  
  state = {
    name: '',
    images: null,
    data: [],
    page: 1,
    isLoading: false,
    isShowButton: false,
    error: null,
  }

   async componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;
    const prevPage = prevState.page;
    const prevName = prevState.name;
    const prevImages = prevState.images;

    if (prevName !== name || prevPage !== page) {
      try {
        this.setState({ isLoading: true });

        const { totalHits, hits } = await pixabayApi(name, page);

        if (totalHits === 0) {
          toast.error(`Sorry, there are no pictures on request ${name}`);
          this.setState({ isLoading: false, isShowLoadMore: false });
          return;
        } else {
          this.setState(prevState => ({
            images: page === 1 ? hits : [...prevImages, ...hits],
            isShowLoadMore: page < Math.ceil(totalHits / 12),
          }));

          this.setState({ isLoading: false });
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  handleSubmit = name => {
    name.preventDefault();
    this.setState({ name, page: 1, images: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };


  render() {
    
    return (
      <div>
        <div>I am App</div>

        <Searchbar onSubmit={this.handleSubmit} />
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
