import React, { Component } from 'react'
import NavBar from './Component/NavBar/NavBar'
import SimpleSlider from './Component/Slider/SimpleSlider'
import Card from './ServiceCard/Card'
import Team from './Component/Team/Team'
import Footer from './Component/Footer/Footer'

 class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <SimpleSlider/>
     <Card/>
     <Team/>
     <Footer/>
      </div>
    )
  }
}
export default App

