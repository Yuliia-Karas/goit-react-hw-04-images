import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';

const KEY = '35692508-ed297a5167f9400201d2ec2b1';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [],
      page: 1,
      isLoading: false,
      isShowButton: false,
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  async handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${this.state.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ data });
    this.setState({ name: '' });
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <div>I am App</div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
