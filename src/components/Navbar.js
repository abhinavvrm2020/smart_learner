import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import './Navbar.css';

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if(state) {
      return (
        <>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Topic
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Operating System</a>
            </div>
          </div>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Log Out</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Topic
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">Sign In</NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Smart Learner</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <RenderMenu />
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar