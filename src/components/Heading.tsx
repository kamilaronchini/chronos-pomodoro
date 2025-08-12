// `${styles.heading} ${styles.color}` para usar mais de uma classe em um componente
import styles from "./Heading.module.css";

export function Heading() {
    return <h1 className={styles.heading}>Olá mundo</h1>
}