import { Facebook } from '../../icons/Facebook'
import { Github } from '../../icons/Github'
import { Instagram } from '../../icons/Instagram'
import { Linkedin } from '../../icons/Linkedin'
import styles from './social-media.module.scss'

function SocialMedia ({ className = '' }) {
    return (
        <div className={`${className} ${styles.socialMedia}`}>
            <a rel="noreferrer" target="_blank" title="Página pessoal do Facebook" href="https://www.facebook.com/lais.frigerio">
                <Facebook className={styles.socialMediaIco} />
            </a>
            <a rel="noreferrer" target="_blank" title="Repositório no github" href="https://github.com/laisfrigerio">
                <Github className={styles.socialMediaIco} />
            </a>
            <a rel="noreferrer" target="_blank" title="Página pessoal do Instagram" href="https://www.instagram.com/laisfrigerio/">
                <Instagram className={styles.socialMediaIco} />
            </a>
            <a rel="noreferrer" target="_blank" title="Página do perfil no Linkedin" href="https://www.linkedin.com/in/laisfrigerio/">
                <Linkedin className={styles.socialMediaIco} />
            </a>
        </div>
    );
}

export { SocialMedia }
