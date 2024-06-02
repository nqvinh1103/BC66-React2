import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    return (
      <div className='row'>
        <div className='contain'>
          <img className='w-25' src="./glass/glassesImage/model.jpg" alt="" />
          <div className='glassImage' style={{ backgroundImage: `url(${this.props.bgImage})` }}></div>
        </div>
      </div>
    )
  }
}
  