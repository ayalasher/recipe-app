// import { useState } from "react"


// const [aloading , setloading] = useState(true)

// setloading(true)

export default function Itemlist({ food, loading }) {
    return (
        <div>
            {loading ? (
                <p>Loading ingredients</p>
            ) : (
                food.extendedIngredients.map((item) => (
                    <div key={item.id}>
                        <img src={`https://spoonacular.com/cdn/ingredients_70x70/${item.image}`} alt={item.name} />
                        <h5>{item.name}</h5>
                        <h5>
                            {item.amount} {item.unit}
                        </h5>
                    </div>
                ))
            )}
        </div>
    );
}   