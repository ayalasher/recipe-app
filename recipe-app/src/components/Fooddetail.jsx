import { useEffect, useState } from "react"
import styles from './Fooddetail.module.css'

export default function Fooddetail({FoodId}) {


    const [food,setFood] = useState({})

    const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`
    const APIKEY = "ec0ae4efcbf04b1da8e7a18c38452bf8"

    useEffect(()=>{
        async function Fetchinst() {
            const res = await fetch(`${URL}?apiKey=${APIKEY}`);
            const data = await  res.json();
            console.log(data);
            setFood(data)
        }
        // Calling the Fetchinst fuction
        Fetchinst()
    },[FoodId])

    return <div>

        <div>
        <h3>Food Detail </h3>
        <img className={styles.image} src={food.image} alt="" />
        <h6> {food.title} </h6>
        </div>

        <span>
            <strong>preparation time :</strong> {food.readyInMinutes} minutes
        </span>

        <div>
            <span> <strong> {food.vegetarian ? "vegetarian🌾": "Non-vegetarian🍖" } </strong> </span>
        </div>
        <div>
            <span><strong>Number of servings:</strong> {food.servings} 👨‍👩‍👧‍👦</span>
        </div>

        <div>
            <span><strong>Price per serving:</strong> {food.pricePerServing} </span>
        </div>


        <div className={styles.inst} >
            <h3>Instructions</h3>
            <br />
            {food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))}
        </div>
       
    </div>  
}