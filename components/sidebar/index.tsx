import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context/context'
import Link from 'next/link'

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="link" href="/characters">
              Characters
            </Link>
          </li>
          <li>
            <Link className="link" href="/comics" onClick={closeSidebar}>
              Comics
            </Link>
          </li>
          <li>
            <Link className="link" href="/creators" onClick={closeSidebar}>
              Creators
            </Link>
          </li>
          <li>
            <Link className="link" href="/events" onClick={closeSidebar}>
              Events
            </Link>
          </li>
          <li>
            <Link className="link" href="/series" onClick={closeSidebar}>
              Series
            </Link>
          </li>
          <li>
            <Link className="link" href="/stories" onClick={closeSidebar}>
              Stories
            </Link>
          </li>
        </ul>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sidebar-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 52px;
  }
  .close-btn {
    border: transparent;
    background: transparent;
    color: red;
    padding: 0 2rem;
    font-size: 1.2rem;
    transition: var(--transition);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    transition: var(--transition);
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    background: #202020;
  }

  .nav-links {
    padding: 1rem 2rem;
    color: #fff;

    li {
      color: red;
      text-transform: uppercase;
      font-size: 12px;
    }
  }

  .link {
    color: #fff;
  }

  @media screen and (min-width: 839px) {
    .sidebar {
      display: none;
    }
  }
`
