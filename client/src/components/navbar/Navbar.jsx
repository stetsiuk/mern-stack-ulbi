import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import {logoutUser} from "../../reducers/userReducer";


const Navbar = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                {isAuth && <div className="navbar__logout" onClick={() => dispatch(logoutUser())}>Выйти</div>}
            </div>
        </div>
    );
};


export default Navbar;
