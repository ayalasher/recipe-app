import { useEffect, useState } from "react"
import styles from './search.module.css'

export default  function Search({foodData,setfoodData}) {

    // The use state hook
    const [Query,setQuery] = useState("")
    

    const URL = "https://api.spoonacular.com/recipes/complexSearch"

    const APIKEY = "ec0ae4efcbf04b1da8e7a18c38452bf8"

    // The functioning of the use effect
    useEffect(()=>{
        // using the function fetch
        async function fetchfood() {
         const res = await fetch(`${URL}?query=${Query}&apiKey=${APIKEY}`)
         const data = await res.json()
         console.log(data.results);
         setfoodData(data.results)
        };
        fetchfood();

    },[Query])
    return <div className={styles.searchcontainer}  >
        {/* <div>From the searh component</div> */}

        <input placeholder="search food recipe" className={styles.input} value={Query} onChange={(e)=>setQuery(e.target.value)} type="text" />
    </div> 
}