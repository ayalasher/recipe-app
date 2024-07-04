// import { useState } from "react"


// const [aloading , setloading] = useState(true)

// setloading(true)

export default function Itemlist(food,loading) {
    return <div>
                {loading? <p>ingredients loading ...</p>:food.extendedIngredients.map((item)=> <div>

<img src={`https://spoonacular.com/cdn/ingredients_70*70`+item.image} alt="" />

<h5> {item.name} </h5>
<h5> {item.amount}  {item.unit}   </h5>
</div>) }
        
    </div>
}