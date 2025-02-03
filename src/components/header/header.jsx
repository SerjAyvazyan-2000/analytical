import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import {useEffect, useState} from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);


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




    return <header className={`header ${scrolled ? "moved" : ""}`}>
        <div className='container'>
            <div className='header-body G-justify-between'>
                <Link className='header-logo' to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className={`menu ${isActive ? "active" : ""}`}>
                    {/*<ul className="menu-list G-align-center">*/}
                    {/*    {menuItems.map((item, index) => (*/}
                    {/*        <li*/}
                    {/*            key={item.id}*/}
                    {/*            className={`menu-item ${activeIndex === index ? "active" : ""}`}*/}
                    {/*            onClick={() => handleClick(index)}*/}
                    {/*        >*/}
                    {/*            <Link className="menu-link G-align-center" to={item.link}>*/}
                    {/*                <i className={`icon menu-icon ${item.icon}`}></i>*/}
                    {/*                <span>{item.title}</span>*/}
                    {/*                {item.arrow ? <i className="icon icon-arrow"></i> : null}*/}

                    {/*            </Link>*/}
                    {/*            {item.subMenu ?*/}
                    {/*                <>*/}
                    {/*                    <ul className="sub-menu">*/}
                    {/*                        {item.subMenu.map((sub, subIndex) => (*/}
                    {/*                            <li key={subIndex} className="sub-menu-item">*/}
                    {/*                                <Link*/}
                    {/*                                    target="_blank"*/}
                    {/*                                    className="sub-menu-link G-align-center"*/}
                    {/*                                    to={sub.url}*/}
                    {/*                                >*/}
                    {/*                                    <span>{sub.text}</span>*/}
                    {/*                                </Link>*/}
                    {/*                            </li>*/}
                    {/*                        ))}*/}
                    {/*                    </ul>*/}
                    {/*                </> : null}*/}

                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}


                    <ul className="menu-list G-align-center">
                        <li className={`menu-item`}>
                            <Link className="menu-link G-align-center" to={'https://drti-bkd.sandcloud.ru/'}>
                                <i className={`icon menu-icon icon-projects`}></i>
                                <span>Проекты</span>
                            </Link>

                        </li>

                        <li className={`menu-item menu-clue-item`}>
                            <Link className="menu-link G-align-center" to={''}>
                                <i className={`icon menu-icon icon-analytics`}></i>
                                <span>Аналитика</span>
                            </Link>
                            <p className='menu-clue'>В разработке</p>

                        </li>

                        <li className={`menu-item menu-clue-item`}>
                            <Link className="menu-link G-align-center" to={''}>
                                <i className={`icon menu-icon icon-experts`}></i>
                                <span>Эксперты</span>
                            </Link>
                            <p className='menu-clue'>В разработке</p>

                        </li>

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









