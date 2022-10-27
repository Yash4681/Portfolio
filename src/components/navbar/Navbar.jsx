import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='nb'>
    <nav className="navbar navbar-dark navbar-expand-lg n" style={{color: "white"}}>
        <div className="container-fluid">
            <a className="navbar-brand nb h1">Yash M</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse n-items" id="navbarNavAltMarkup">
                <div className="navbar-nav float-end">
                    <a className="nav-link active" aria-current="page" href="#about">About</a>
                    <a className="nav-link" href="#skills">Skills</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href='#contact'>Contact</a>
                </div>
            </div>
        </div>
    </nav>
    </div>

  )
}

export default Navbar