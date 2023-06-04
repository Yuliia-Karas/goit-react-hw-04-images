import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const KEY = '35692508-ed297a5167f9400201d2ec2b1';
    // const URL = 'https://pixabay.com/api/';
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    }
    
    componentDidUpdate() {
        console.log({state:this.state});
    }

  render() {
    return <div>I am search form</div>;
  }
}

export default SearchForm;
