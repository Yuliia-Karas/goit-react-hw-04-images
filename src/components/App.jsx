import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Searchbar from './Searchbar/Searchbar'

class App extends React.Component {
  state = {
     name:''
   }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({name:''})

  }
  render() {


    return <div>
      <div>I am App</div> 
      <SearchForm />
      <Searchbar onSubmit={this.handleSubmit } />
    </div>
  }
}

export default App;