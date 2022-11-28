import React, {Component} from "react";
import logo from "../assets/img/logo.png"

class SeachBox extends Component {
  state = {  } 
  render() { 
    let { handleOnchage, input } = this.props;
    return (
      <div className="search-box">
        <div className="imgBackground">
          <img src={logo} alt="logo" />
        </div>
        <div className="inputValue">
          <input type="text" value={input} className="" onChange={handleOnchage} />
        </div>
      </div>
    );
  }
}
 
export default SeachBox;