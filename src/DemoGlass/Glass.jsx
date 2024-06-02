import React, { Component } from 'react'

export default class Glass extends Component {
  render() {
    let { img, handleClick } = this.props
    return (
      <div className='col-4'>
        <div>
          <button onClick={handleClick}>
            <img src={img} className='w-25' alt="" />
          </button>
        </div>
      </div>
    )
  }
}
