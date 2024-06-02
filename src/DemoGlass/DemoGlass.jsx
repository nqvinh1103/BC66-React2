import React, { Component } from 'react'
import Glass from './Glass'
import { glassArr } from './data'
import Header from './Header'
import Model from './Model'

export default class DemoGlass extends Component {
  state = {
    bgImage: "",
    name: "",
    desc: "",
  }

  handleChangeGlass = (newImage,newName,newDesc,id) => {
    this.setState(prevState => ({
      bgImage: prevState.id === id ? "" : newImage,
      name: prevState.id === id ? "" : newName,
      desc: prevState.id === id ? "" : newDesc,
      id: prevState.id === id ? null : id,    
    }))
  }

  renderGlass = () => {
    return glassArr.map(({ index, hinhAnh,name,desc}) => {
      return <Glass handleClick={() => this.handleChangeGlass(hinhAnh,name,desc)} key={index} img={hinhAnh} />
    })
  }

  render() {
    return (
      <div className='container-fluid project'>
        <Header />
        <Model bgImage={this.state.bgImage} name={this.state.name} desc={this.state.desc}/>
        <div className='row p-5'>{this.renderGlass()}</div>
      </div>
    )
  }
}
