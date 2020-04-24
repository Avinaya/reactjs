import React, { Component } from 'react'
import NavBar from './Component/NavBar/NavBar'
import SimpleSlider from './Component/Slider/SimpleSlider'
import Card from './Component/ServiceCard/Card'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Technologies from './Component/Technologies/Technologies'
import Team from './Component/Team/Team'

 class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <SimpleSlider/>
     <Card/>
     <About/>
     <Team/>
     <Technologies/>
     <Footer/>
      </div>
    )
  }
}
export default App

