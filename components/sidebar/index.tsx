import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context/context'

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  console.log(isSidebarOpen)
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
          <li>news</li>
          <li>comics</li>
          <li>movies</li>
          <li>games</li>
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

    li {
      color: red;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 839px) {
    .sidebar {
      display: none;
    }
  }
`
