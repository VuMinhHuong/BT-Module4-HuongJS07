import React, {Component} from "react";
import "./App.css"
import Result from "./components/Result";
import SearchBox from "./components/SearchBox";

class App extends Component {
  state = {
    input : "",
    data: [],
  }

  componentDidMount(){
  let backendUrl = "https://breakingbadapi.com/api/characters";
  fetch(backendUrl)
    .then((res) => res.json())
    .then((data)=> {
      console.log(data);
      this.setState({
        data: data
      })
    })
    .catch((err) => console.log(err))
  }
  
  handleOnchage = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <SearchBox handleOnchage={this.handleOnchage} input={this.state.input}/>
        <Result data={this.state.data}/>
      </div>
    )
  }
}
 
export default App;
