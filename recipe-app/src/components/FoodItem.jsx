import styles from './Fooditem.module.css'


export default function FoodItem({food,setFoodId}) {
    return <div className={styles.container} >
        <img className={styles.image} src={food.image} alt="" />
        <p className={styles.title} >{food.title}</p> 
        <button onClick={()=>{
            console.log(food.id);
            setFoodId(food.id)
        }} className={styles.button} >View recipe</button>
    </div>
}