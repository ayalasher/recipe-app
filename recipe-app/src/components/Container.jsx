import styles from './Pcontainer.module.css'

export default function Container({children}) {
    return <div className={styles.outerContainer} > {children} </div>
}