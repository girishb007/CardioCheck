import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setLevel } from '../../redux/actionCreators/SetLevel';
import main from '../../public/assets/images/logo2.png';

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isRoute, setIsRoute] = useState('');
    const level = useSelector((state) => state.MainViewReducer.level ?? '');

    useEffect(() => {
        setIsRoute(router.route);
    });

    if (level == '') {
        dispatch(setLevel('personal'));
    }

    let changeLevel = (elementLevel) => {
        dispatch(setLevel(elementLevel));
    };

    let changeRoute = (elementRoute) => {
        setIsRoute(elementRoute);
        router.push(elementRoute);
    };

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '25px',
        padding: '5px 15px',
        fontSize: '1rem', // Adjust font size as needed
        fontWeight: 'bold', // Bold font for emphasis
    };
    const buttonStyle2 = {
        backgroundColor: 'white', // Light Blue Background for buttons
        color: 'black', // Black text color
        borderRadius: '15px',
        padding: '5px 15px',
        fontSize: '1rem',
        fontWeight: 'bold',
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'lightblue' }}>
            <div className="container" style={{ backgroundColor: 'white' }}>
                {/* ... Logo and other elements ... */}
                <a
                    className="navbar-brand"
                    onClick={(e) => {
                        changeRoute('/');
                        e.preventDefault();
                    }}
                >
                    <img src={main.src} alt="Main" />
                </a>


                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        {/* ... Other nav items ... */}
                        <li className="nav-item">
                            <a
                                className={isRoute.includes('login') ? 'nav-link nav-highlight' : 'nav-link'}
                                style={{ fontWeight: 'bold' }} // Bold font for Login/Register
                                onClick={(e) => {
                                    changeRoute('/caaas/login');
                                    e.preventDefault();
                                }}
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={isRoute.includes('register') ? 'nav-link nav-highlight' : 'nav-link'}
                                style={{ fontWeight: 'bold' }} // Bold font for Login/Register
                                onClick={(e) => {
                                    changeRoute('/caaas/register');
                                    e.preventDefault();
                                }}
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className={level == 'personal' ? 'nav-link nav-highlight' : 'nav-link'}
                                style={buttonStyle2}
                                onClick={(e) => {
                                    changeLevel('personal');
                                    e.preventDefault();
                                }}
                            >
                                Personal
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={level == 'organisation' ? 'nav-link nav-highlight' : 'nav-link'}
                                style={buttonStyle2}
                                onClick={(e) => {
                                    changeLevel('organisation');
                                    e.preventDefault();
                                }}
                            >
                                Organisation
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
