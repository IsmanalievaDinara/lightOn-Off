import React from "react";
import lightOn from './img/lighton.png'
import lightOff from './img/lightoff.png'

class App extends React.Component{
constructor(){
  super()
  this.state=({isOn:false})
}

changeTheLightState(){
  this.setState({isOn:!this.state.isOn})
}
  render(){
    const isTheLightOn=this.state.isOn

    if(this.state.isOn){
    document.body.style.backgroundColor="white"
    //if(isTheLightOn)
    }else{
      document.body.style.backgroundColor="black"
    }
    return(
      <>
      <div> 
        <img src={isTheLightOn?lightOn:lightOff}/>
        <button onClick={()=>this.changeTheLightState()}>on/off</button>
      </div>
      </>
    )
  }
}



export default App;
