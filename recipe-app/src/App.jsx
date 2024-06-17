import React, { useState } from "react"
import Search from "./components/Search.jsx"

function App() {

  const [foodData,setfoodData] = useState([])

  return <div>
    <Search foodData={foodData} setfoodData={setfoodData}  />
    {foodData.map((food)=>(
      <h4> {food.title} </h4>
    ))}
  </div>
}

export default App
