import { SocialMedia } from '../../components/SocialMedia'
import { IconAvatar } from '../../icons/Avatar'
import { Wrapper } from './styles'

function Footer() {
    return (
        <Wrapper>
            <SocialMedia className='social-media' />
            <span>Copyright @ Lais Frigério</span>
            <IconAvatar className='avatar' />
        </Wrapper>
    )
}

export { Footer }
