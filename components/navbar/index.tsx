import styled from 'styled-components'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar-center">
        <div className="navbar-header">
          <Link href="/">
            <Image
              src={logo}
              alt="marvel-logo"
              className="logo"
              priority={true}
            />
          </Link>
          <button type="button" className="side-bar-btn">
            <FaBars />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 52px;
  background: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
`
