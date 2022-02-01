import { SocialMedia } from '../../components/SocialMedia'
import { Avatar } from '../../icons/Avatar'
import styles from './footer.module.scss'

function Footer () {
    return (
        <footer className={styles.footer}>
            <SocialMedia className={styles.socialMedia} />
            <span>Copyright @ Lais Frigério</span>
            <Avatar className={styles.avatar} />
        </footer>
    )
}

export { Footer }
