import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Sidebar from '../../layouts/sidebar';

const Home = () => {

    // const menu = [
    //     {
    //         title: "abc",
    //         url: "/new/abc"
    //     },
    //     {
    //         title: "xyz",
    //         url: "/new/xyz"
    //     },
    //     {
    //         title: "pqr",
    //         url: "/new/pqr"
    //     }
    // ]

    return (
        <div>
        <div className="header">
            <h1>header</h1>
        </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Link</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="sidebar">
            <Sidebar/>
                {/* <Menu>
                        {
                            menu.map((el) => {
                                return (
                                    <MenuItem className="menu"> {el.title} </MenuItem>
                                );
                            })
                        }
                    </Menu> */}
            </div>
        </div>
    )
}

export default Home;