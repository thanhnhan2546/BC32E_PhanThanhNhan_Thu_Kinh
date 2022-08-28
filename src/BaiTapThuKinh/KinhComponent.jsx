import React, { Component } from 'react'

export default class KinhComponent extends Component {
  render() {
      let {kinh}  = this.props;
    return (
      <div><img onClick={()=>{this.props.hamDoiKinh(kinh)}} alt="..." src={kinh.url} width='110px'className='ml-2 p-2 border border-width-1' style={{cursor: 'pointer'}}/></div>
    )
  }
}
