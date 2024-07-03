import FoodItem from "./FoodItem"

export default function foodlist({foodData,setFoodId}) {
    return <div>
         {foodData.map((food)=>(
            <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
    ))}
    </div>
}