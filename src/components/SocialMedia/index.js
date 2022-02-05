import { IconFacebook } from '../../icons/Facebook'
import { IconGithub } from '../../icons/Github'
import { IconInstagram } from '../../icons/Instagram'
import { IconLinkedin } from '../../icons/Linkedin'
import { Wrapper } from './styles'

function SocialMedia({ className = '' }) {
    return (
        <Wrapper className={`${className}`}>
            <a rel="noreferrer" target="_blank" title="Página pessoal do Facebook" href="https://www.facebook.com/lais.frigerio">
                <IconFacebook className='ico' />
            </a>
            <a rel="noreferrer" target="_blank" title="Repositório no github" href="https://github.com/laisfrigerio">
                <IconGithub className='ico' />
            </a>
            <a rel="noreferrer" target="_blank" title="Página pessoal do Instagram" href="https://www.instagram.com/laisfrigerio/">
                <IconInstagram className='ico' />
            </a>
            <a rel="noreferrer" target="_blank" title="Página do perfil no Linkedin" href="https://www.linkedin.com/in/laisfrigerio/">
                <IconLinkedin className='ico' />
            </a>
        </Wrapper>
    );
}

export { SocialMedia }
