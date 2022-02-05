import { IconGlassses } from '../../icons/Glasses'
import { Nav, NavLink, Wrapper, WrapperHeader } from './styles'

function Header() {
    return (
        <Wrapper>
            <WrapperHeader>
                <IconGlassses className='ico-glass-header' />
                <Nav>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/'>Posts</NavLink>
                    <NavLink href='/'>About</NavLink>
                </Nav>
            </WrapperHeader>
        </Wrapper>
    )
}

export { Header }
