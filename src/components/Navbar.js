import React from 'react'
// import { Link } from 'react-router-dom'
// import 'App.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          {/* </form> */}
          <div className="d-flex align-items-center gap-1">

            <div className="color bg-success border border-2 border-danger p-2 " onClick={props.handleGreen} role='button'></div>
            <div className="color bg-danger border border-2 border-danger p-2" onClick={props.handelOrange} role='button'></div>
            <div className="color bg-primary border border-2 border-danger p-2" onClick={props.handlePrimary} role='button'></div>
          </div>

          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'white'}`}>
            <input className="form-check-input" onClick={props.toggleClick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.textDark}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
