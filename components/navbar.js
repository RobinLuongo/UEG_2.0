import Link from 'next/link';
import theme from './theme';

import { useRouter } from 'next/router';

import { useState } from 'react';

export default function Navbar(props) {
    const router = useRouter();
    const [mobile, setMobile] = useState("");

    return (
        <div className={'nav-container ' + mobile}>
            <div className="container">
                <div>
                    <Link href="/">
                        <div className="logo-container">
                            <img src='/images/UNIBLUE.png' className="nav-logo"></img>
                            <span className="uni-name">Uni Esports Group</span>
                        </div>
                    </Link>
                    <div className="mobile-icon" onClick={handleClick}>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a className="nav-link" onClick={(e) => handleNav(e, '/', '.mission')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={(e) => handleNav(e, '/our-team')}>Our Team</a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={(e) => handleNav(e, '/', '.wpt-container')}>
                            Resources
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={(e) => handleNav(e, '/blog/2020-02-06-the-uni-esports-program-rubric')}>Blog</a>
                    </li>
                </ul>
            </div>
        <style jsx>{`
            .nav-container {
                height: 110px;
                position: fixed;
                top: 0;
                z-index: 1000;
                background: white;
                width: 100%;
                transition: height .25s;
            }
            .logo-container {
                display: flex;
                cursor: pointer;
            }
            .nav-logo {
                width: auto;
                height: 110px;
            }
            .container {
                display: flex;
                justify-content: space-between;
            }
            .container > div {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .nav-list {
                list-style: none;
                display: flex;
                align-self: center;
                color: ${theme.colors['dark-blue']};
                font-weight: 600;
                font-size: 20px;
                margin: 0px;
            }
            .nav-link:hover {
                color: ${theme.colors['light-blue']}
            }
            .nav-link {
                padding: 10px 20px;
                line-height: 45px;
                text-decoration: none;
                color: inherit;
                cursor: pointer;
                white-space: nowrap;
            }
            .uni-name {
                color: ${theme.colors['reg-blue']};
                font-size: 20px;
                align-self: center;
                margin-left: 30px;
            }
            .mobile-icon {
                display: none;
            }
            @media(max-width: 900px) {
                .nav-container.mobile-expanded {
                    height: 100%;
                }
                .container {
                    flex-direction: column;
                }
                .mobile-icon {
                    display: block;
                }

                .mobile-expanded .icon-line {
                    background-color: #0a93eb !important;
                }
            
                .mobile-icon {
                    display: block;
                    margin-top: 15px;
                }
            
                .mobile-expanded .nav-list {
                    display: flex;
                    flex-direction: column;
                    font-size: 30px;
                    width: 100%;
                    text-align: center;
                }

                .mobile-expanded .nav-list > li {
                    margin-bottom: 20px;
                }
            
                .nav-list {
                    display: none;
                }
            
                .mobile-expanded .mobile-icon {
                    position: relative;
                    margin-top: 18px;
                }
            
                .mobile-expanded .icon-line:first-child {
                    transform: rotate(-45deg)
                }
            
                .mobile-expanded .icon-line:nth-child(2n) {
                    transform: rotate(45deg);
                    position: absolute;
                    top: -5px;
                }
            
                .mobile-expanded .icon-line:nth-child(3n) {
                    display: none;
                }
            
                .icon-line {
                    background-color: #4c4c4c;
                    width: 25px;
                    height: 3px;
                    border-radius: 1px;
                    transition: transform .25s;
                }
            
                .icon-line:not(:first-child) {
                    margin-top: 5px;
                }
            }
        `}</style>
        </div>
    )

    function scrollTo(selector) {
        let scrollOptions;
        let element = document.querySelector(selector)
        if (element) {
            scrollOptions = {
                top: element.offsetTop - 100,
                left: 0,
                behavior: 'smooth'
            }
        } else {
            scrollOptions = {
                top: 0
            }
        }
        window.scroll(scrollOptions)
    }

    function handleClick() {
        if (!mobile) {
            setMobile("mobile-expanded");
            document.querySelector("body").style.overflow = "hidden";
        } else {
            setMobile("");
            document.querySelector("body").style.overflow = "auto";
        }
    }

    function handleNav(e, route, selector) {
        e.preventDefault();
        if (route && router.pathname != route) {
            router.push(route);
            router.events.on('routeChangeComplete', () => scrollTo(selector))
        } else {
            scrollTo(selector);
        }
        if(mobile) handleClick();
    }
}
