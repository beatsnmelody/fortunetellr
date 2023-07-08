import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    const [nav, setNav] = useState(false);

    const handleLogOut = () => {
        props.setIsLoggedIn(false);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (!props.token) {
            const storedToken = localStorage.getItem("token");
            props.setToken(storedToken);
            props.setIsLoggedIn(false);
        }
    }, [props.isLoggedIn, props.token]);
    const links = [
        {
            id: 1,
            link: "home",
            path: "/",
        },
        {
            id: 2,
            link: "aura",
            path: "/auraquiz",
        },
        {
            id: 3,
            link: "tarot",
            path: "/tarot",
        },
        {
            id: 4,
            link: "pendulum",
            path: "/pendulum",
        },

        {
            id: 5,
            link: "eightball",
            path: "/eightball",
        },

        {
            id: 6,
            link: "zodiac",
            path: "/zodiac",
        },
    ];
    return (
        <div className>
            <div>
                <h2 className="headerNav">
                    GET YOUR FORTUNES FAST AND FREE
                </h2>
            </div>
            <ul className="linkz">
                {links.map(({ id, link, path }) => (
                    <li className="linkz"
                        key={id}
                    >
                        <NavLink to={path} duration={500}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <NavLink to="/login">
                    {!props.isLoggedIn ? (
                        <button className="button">
                            Login!
                        </button>
                    ) : (
                        <button
                            onClick={handleLogOut}
                            className="button"
                        >
                            Sign Out
                        </button>
                    )}
                </NavLink>
                {!props.isLoggedIn && (
                    <NavLink to="/register">
                        <button className="button">
                            Join Us!
                        </button>
                    </NavLink>
                )}
            </div>
        </div>

    )
}

export default NavBar;