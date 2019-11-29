import Link from 'next/link';
import theme from './theme';

export default function Navbar(props) {
    const navList = ["About", "Our Team", "Resources", "Blog"];

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
                    {
                        navList.map((section, i) => {
                            return (
                                <li className="nav-link" key={i}>
                                    <a onClick={(e) => {scrollTo(e, section); if(mobile){handleClick(e)}}} href="/">
                                    {section}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        <style jsx>{`
            .nav-container {
                height: 110px;
                position: fixed;
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
            .nav-list > li > a {
                padding: 10px 20px;
                line-height: 45px;
                text-decoration: none;
                color: inherit;
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