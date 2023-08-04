import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import './css/Navbar.css';
import { NavDropdown } from 'react-bootstrap';
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
        <li className='nav-item'>
         <NavDropdown title="Topic" id="basic-nav-dropdown">
            <NavDropdown.Item href="/card">Operating System</NavDropdown.Item>
            <NavDropdown.Item href="/card1">Data Structures</NavDropdown.Item>
            <NavDropdown.Item href="/card2">Object Oriented Programming</NavDropdown.Item>
            <NavDropdown.Item href="/card3">Database Management System</NavDropdown.Item>
          </NavDropdown></li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Log Out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
        <li className='nav-item'>
         <NavDropdown title="Topic" id="basic-nav-dropdown">
            <NavDropdown.Item href="/card">Operating System</NavDropdown.Item>
            <NavDropdown.Item href="/card1">Data Structures and Algorithms</NavDropdown.Item>
            <NavDropdown.Item href="/card2">Object Oriented Programming</NavDropdown.Item>
            <NavDropdown.Item href="/card3">Database Management System</NavDropdown.Item>
          </NavDropdown></li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SignUp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-5-strong navbar-dark">
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