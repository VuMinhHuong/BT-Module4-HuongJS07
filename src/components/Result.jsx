import React, {Component} from "react";

class Result extends Component {
  render() {
    let { data } = this.props;
    console.log("data", data);
    return (
        <div className="resultTotal">
                {data.map((e, i) => (
                    <div className="result" key={i}>

                        <div className="flip-card">
                            <div className="flip-card-inner">

                                <div className="cardImg flip-card-front">
                                    <img src={e.img} alt="nv"/>
                                </div>

                                <div className="cardImg resultCard flip-card-back">
                                    <h4 className="nameChar">{e.name}</h4>
                                    <div className="actName">
                                        <span>Actor Name: </span>
                                        <span>{e.portrayed}</span>
                                    </div>
                                    <div className="nickName">
                                        <span>Nickname: </span>
                                        <span>{e.nickname}</span>
                                    </div>
                                    <div className="birthDay">
                                        <span>Birthday: </span>
                                        <span>{e.birthday}</span>
                                    </div>
                                    <div className="status">
                                        <span>Status: </span>
                                        <span>Alive</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
        </div>       
    );
  }
}
 
export default Result;