import styles from './Fooditem.module.css'


export default function FoodItem({food}) {
    return <div className={styles.container} >
        <img className={styles.image} src={food.image} alt="" />
        <p className={styles.title} >{food.title}</p> 
        <button className={styles.button} >View recipe</button>
    </div>
}