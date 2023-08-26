import { Link } from '../../components/Link'
import { IconGlassses } from '../../icons/Glasses'
import { Nav, NavLink, Wrapper, WrapperHeader } from './styles'

function Header({ active = 'home', ...props }) {
    return (
        <Wrapper { ...props }>
            <WrapperHeader>
                <IconGlassses className='ico-glass-header' />
                <Nav>
                    <Link data-testid='header-link-home' href='/' className={active === 'home' ? 'active' : ''}>
                        Início
                    </Link>

                    <Link data-testid='header-link-posts' href='/posts' className={active === 'posts' ? 'active' : ''}>
                        Posts
                    </Link>
                </Nav>
            </WrapperHeader>
        </Wrapper>
    )
}

export { Header }
