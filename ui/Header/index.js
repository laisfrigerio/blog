import { Glassses } from '../../icons/Glasses'
import styles from './header.module.scss'

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Glassses className={styles.icoGlasses} />
                <nav className={styles.nav}>
                    <a href="/">Home</a>
                    <a className={styles.active} href="/">Posts</a>
                    <a href="/">About</a>
                </nav>
            </div>
        </header>
    )
}

export { Header }
