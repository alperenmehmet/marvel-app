import styled from 'styled-components'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useGlobalContext } from '../../context/context'

export const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <Wrapper>
      <div className="navbar-top">
        <Link href="/">
          <Image
            src={logo}
            alt="marvel-logo"
            className="logo"
            priority={true}
          />
        </Link>
        <button type="button" className="side-bar-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>news</li>
        <li>comics</li>
        <li>movies</li>
        <li>games</li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 52px;
  background: #202020;

  .navbar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .logo {
    width: 130px;
    height: 52px;
    margin: 0 auto;
  }
  .side-bar-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
  }
  .nav-links {
    display: none;
    height: 40px;
    background: #202020;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
  }
  @media screen and (min-width: 839px) {
    .navbar-top {
      justify-content: center;
    }
    .side-bar-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        padding: 0 2rem;
      }
    }
  }
`
