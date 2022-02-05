import NextLink from 'next/link'
import { IconGlassses } from '../../icons/Glasses'
import { Nav, NavLink, Wrapper, WrapperHeader } from './styles'

function Header({ active = 'home' }) {
    return (
        <Wrapper>
            <WrapperHeader>
                <IconGlassses className='ico-glass-header' />
                <Nav>
                    <NextLink href='/' passHref>
                        <NavLink className={active === 'home' ? 'active' : ''}>Início</NavLink>
                    </NextLink>

                    <NextLink href='/' passHref>
                        <NavLink className={active === 'post' ? 'active' : ''}>Posts</NavLink>
                    </NextLink>

                    <NextLink href='/' passHref>
                        <NavLink className={active === 'about' ? 'active' : ''}>Sobre</NavLink>
                    </NextLink>
                </Nav>
            </WrapperHeader>
        </Wrapper>
    )
}

export { Header }
