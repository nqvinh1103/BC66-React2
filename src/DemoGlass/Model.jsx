import React, { Component } from "react";

export default class Model extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 contain">
          <img className="w-50" src="./glass/glassesImage/model.jpg" alt="" />
          <div
            className="glassImage"
            style={{ backgroundImage: `url(${this.props.bgImage})` }}
          ></div>
          {this.props.name && this.props.desc && (
            <div className="overlay">
              <h5 className="text-primary">{this.props.name}</h5>
              <p>{this.props.desc}</p>
            </div>
          )}
        </div>
        <div className="col-6">
          <img className="w-50" src="./glass/glassesImage/model.jpg" alt="" />
        </div>
      </div>
    );
  }
}
