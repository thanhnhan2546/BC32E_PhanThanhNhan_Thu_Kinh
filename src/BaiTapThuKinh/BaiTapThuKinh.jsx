import React, { Component } from 'react'
import KinhComponent from './KinhComponent'

export default class BaiTapThuKinh extends Component {
  dataGlass = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
state = {
  glassesCurrent: {"id": 2,
  "price": 50,
  "name": "GUCCI G8759H",
  "url": "./glassesImage/v2.png",
  "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "}
}


  changeGlasses = (newGlasses)=>{
    this.setState({
      glassesCurrent: newGlasses
    })
  }

  render() {
    const styleGlass ={
      position:'absolute',zIndex:'1',top:'88px',left:'196px',opacity:'0.9'
    }

    const infoGlass ={
      position: 'relative',
    width: '300px',
    height:'100px',
    left: '120px',
    top: '-99px',
    textAlign: 'left',
    paddingLeft: '20px',
    backgroundColor: 'rgba(255,127,0,0.5)'
    }

    return (
      <div style={{backgroundImage:'url(./glassesImage/background.jpg)', height:'100vh',backgroundSize:'cover'}}>
        <div style={{backgroundColor:'rgba(0,0,0,0.8)', height:'100vh'}}>
          <h3 style={{backgroundColor:'rgba(0,0,0,0.3)'}} className='p-5 text-center text-light'>TRY GLASSES APP ONLINE</h3>
          <div className='container'>
          <div className='row text-center mt-5'>
            <div className='col-6' style={{postition:'relative'}}>
              <img  src="./glassesImage/model.jpg" alt="model.jpg" width={300}/>
              <img style={styleGlass} width={180} src={this.state.glassesCurrent.url} alt="" />
              <div style={infoGlass}>
                <span style={{fontWeight:'bold',fontSize:'17px',color:'#AB82FF'}}>{this.state.glassesCurrent.name}</span><br />
                <span style={{fontWeight:'13px'}}>{this.state.glassesCurrent.desc}</span>
              </div>
            </div>
            <div className='col-6'>
            <img src="./glassesImage/model.jpg" alt="model.jpg" width={300}/>
            </div>
          </div>
          </div>
          <div className='container bg-light d-flex justify-content-center p-4'>
            {this.dataGlass.map((glasses,index)=>{
      return <KinhComponent kinh={glasses} hamDoiKinh={this.changeGlasses}/>
    })}
          </div>
        </div>
      </div>
    )
  }
}
