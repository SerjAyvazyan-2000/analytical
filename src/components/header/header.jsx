import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import {useEffect, useState} from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Тоггл активного класса
    };
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const toggleBurger = () => {
        setIsActive((prev) => !prev);
    };


    const menuItems = [

        {
            id: 1,
            title: "Проекты",
            icon: "icon-projects",
            link: "https://drti-bkd.sandcloud.ru/",

        },
        {
            id: 2,
            title: "Аналитика",
            icon: "icon-analytics",
            link: "/",
            arrow:'icon-arrow',
            subMenu: [
                {
                    text: "Перейти в поиску по базе",
                    url: "https://drti-bkd.sandcloud.ru/",
                },
            ],
        },
        {
            id: 3,
            title: "Эксперты",
            icon: "icon-experts",
            link: "/",
            arrow:'icon-arrow',

            subMenu: [
                {
                    text: "Перейти к поиску эксперта",
                    url: "",
                },
            ],
        },
    ];



    return <header className={`header ${scrolled ? "moved" : ""}`}>
        <div className='container'>
            <div className='header-body G-justify-between'>
                <Link className='header-logo' to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className={`menu ${isActive ? "active" : ""}`}>
                    <ul className="menu-list G-align-center">
                        {menuItems.map((item, index) => (
                            <li
                                key={item.id}
                                className={`menu-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleClick(index)}
                            >
                                <Link className="menu-link G-align-center" to={item.link}>
                                    <i className={`icon menu-icon ${item.icon}`}></i>
                                    <span>{item.title}</span>
                                    {item.arrow ? <i className="icon icon-arrow"></i> : null}

                                </Link>
                                { item.subMenu  ?
                                    <>
                                        <ul className="sub-menu">
                                            {item.subMenu.map((sub, subIndex) => (
                                                <li key={subIndex} className="sub-menu-item">
                                                    <Link
                                                        target="_blank"
                                                        className="sub-menu-link G-align-center"
                                                        to={sub.url}
                                                    >
                                                        <span>{sub.text}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </> : null}

                            </li>
                        ))}
                    </ul>

                </nav>

                <div className={`burger ${isActive ? "active" : ""}`} onClick={toggleBurger}>
                    <span></span>
                </div>

            </div>
        </div>
    </header>
};

export default Header;









