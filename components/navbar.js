import Link from 'next/link';
import theme from './theme';

export default function Navbar(props) {

    return (
        <div className="nav-container">
            <div className="container">
                <div>
                    <Link href="/">
                        <div className="logo-container">
                            <img src='/images/UNIBLUE.png' className="nav-logo"></img>
                            <span className="uni-name">Uni Esports Group</span>
                        </div>
                    </Link>
                </div>
                <ul className="nav-list">
                    <li>
                        <a className="nav-link" onClick={(e) => {scrollTo(e, section); if(mobile){handleClick(e)}}}>
                            About
                        </a>
                    </li>
                    <li>
                        <Link href="/our-team">
                            <a className="nav-link">Our Team</a>
                        </Link>
                    </li>
                    <li>
                        <a className="nav-link" onClick={(e) => {scrollTo(e, section); if(mobile){handleClick(e)}}}>
                            Resources
                        </a>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
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
            .nav-list {
                list-style: none;
                display: flex;
                align-self: center;
                color: ${theme.colors['dark-blue']};
                font-weight: 600;
                font-size: 20px;
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
            }
            .uni-name {
                color: ${theme.colors['reg-blue']};
                font-size: 20px;
                align-self: center;
                margin-left: 30px;
            }
        `}</style>
        </div>
    )
}

function scrollTo() {
    return;
}

function handleClick() {
    return;
}