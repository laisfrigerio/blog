import { Link } from '../../components/Link'
import { IconGlassses } from '../../icons/Glasses'
import { Nav, NavLink, Wrapper, WrapperHeader } from './styles'

function Header({ active = 'home' }) {
    return (
        <Wrapper>
            <WrapperHeader>
                <IconGlassses className='ico-glass-header' />
                <Nav>
                    <Link href='/' passHref>
                        <NavLink className={active === 'home' ? 'active' : ''}>Início</NavLink>
                    </Link>

                    <Link href='/posts' passHref>
                        <NavLink className={active === 'posts' ? 'active' : ''}>Posts</NavLink>
                    </Link>

                    {/* <Link href='/' passHref>
                        <NavLink className={active === 'about' ? 'active' : ''}>Sobre</NavLink>
                    </Link> */}
                </Nav>
            </WrapperHeader>
        </Wrapper>
    )
}

export { Header }
