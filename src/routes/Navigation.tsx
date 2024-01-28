import { NavLink } from 'react-router-dom'
import './navigation.styles.css'

const Navigation = () => {
  return (
    <div className="navigationContainer">
      <div className="navLinks">
        <NavLink className="navLink" to="/">
          Games
        </NavLink>
        <NavLink className="navLink" to="/slot-machine">
          Slot-Machine
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
