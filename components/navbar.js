import Link from 'next/link';
//import logo from '../public/images/UNIBLUE.png'

export default function Navbar(props) {
    const navList = ["About", "Our Team", "Resources", "Blog"];

    return (
        <div className="nav-container">
            <div className="container">
                <div className="logo-container">
                    <Link href="/">
                        <img src='/images/UNIBLUE.png' className="nav-logo"></img>
                    </Link>
                    <span className="uni-name">Uni Esports Group</span>
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
                border-bottom: 1px solid blue;
            }
            .logo-container {
                display: flex;
            }
            .nav-logo {
                width: auto;
                height: 100px;
            }
            .container {
                display: flex;
                justify-content: space-between;
            }
            .nav-list {
                list-style: none;
                display: flex;
                align-self: center;
                color: ${props.theme.colors['dark-blue']};
                font-weight: 600;
                font-size: 20px;
            }
            .nav-list > li > a {
                padding: 10px 20px;
                line-height: 45px;
                text-decoration: none;
                color: inherit;
            }
            .uni-name {
                color: ${props.theme.colors['reg-blue']};
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