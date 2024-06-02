import React, { Component } from 'react'
import Glass from './Glass'
import { glassArr } from './data'
import Header from './Header'
import Model from './Model'

export default class DemoGlass extends Component {
  state = {
    bgImage: ""
  }

  handleChangeGlass = (newImage) => {
    this.setState({
      bgImage: newImage,
    })
  }

  renderGlass = () => {
    return glassArr.map(({ index, hinhAnh }) => {
      return <Glass handleClick={() => this.handleChangeGlass(hinhAnh)} key={index} img={hinhAnh} />
    })
  }

  render() {
    return (
      <div className='container-fluid project'>
        <Header />
        <Model bgImage={this.state.bgImage} />
        <div className='row p-5'>{this.renderGlass()}</div>
      </div>
    )
  }
}
