import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import Logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
    const { cartItems } = useContext(cartContext);
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
        return () => window.removeEventListener('scroll', handleIsSticky);
    }, []);

    const cartQuantity = cartItems.length;

    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
                        <h2 className="nav_logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </h2>

                        {/* Hamburger Icon */}


                        {/* Desktop and Mobile Nav */}
                        <ul className={`nav_links ${mobileMenuOpen ? 'open' : ''}`}>
                            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                        </ul>

                        <nav className="nav_actions">
                            <div className="search_action">
                                <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch />
                                </span>
                                <div className="tooltip">Search</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                    <AiOutlineShoppingCart />
                                    {cartQuantity > 0 && <span className="badge">{cartQuantity}</span>}
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>

                            <div className="user_action">
                                <span><AiOutlineUser /></span>
                                <div className="dropdown_menu">
                                    <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
                                    <p>Access account and manage orders</p>
                                    {!formUserInfo && (
                                        <button type="button" onClick={() => toggleForm(true)}>
                                            Login / Signup
                                        </button>
                                    )}
                                    <div className="separator"></div>
                                    <ul>
                                        {dropdownMenu.map(({ id, link, path }) => (
                                            <li key={id}>
                                                <Link to={path}>{link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <SearchBar />
            <AccountForm />
        </>
    );
};

export default Header;
