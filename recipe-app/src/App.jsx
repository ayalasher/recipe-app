import React, { useState } from "react"
import Search from "./components/Search.jsx"
import Foodlist from "./components/Foodlist.jsx"
import FoodItem from "./components/FoodItem.jsx"
import Nav from "./components/Nav.jsx"
import Container from "./components/Container.jsx"
import Leftcontainer from "./components/Leftcontainer.jsx"
import Rightcontainer from "./components/Rightcontainer.jsx"
import styles from './components/LeftC.module.css'

function App() {

  const [foodData,setfoodData] = useState([])

  return <div>
    {/* <FoodItem/> */}
    <Nav/>

    <Search foodData={foodData} setfoodData={setfoodData}  />

    <Container>
      <Leftcontainer > <Foodlist  foodData={foodData} setfoodData={setfoodData} /></Leftcontainer>
     
     <Rightcontainer></Rightcontainer>

     

    </Container>
   
  </div>
}

export default App
