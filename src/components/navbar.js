import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '0 20px' }}>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          My ToDo App
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список задач</NavLink>
          </li>
          <li>
            <NavLink to="/info">Інформація</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
