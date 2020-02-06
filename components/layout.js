import Head from 'next/head'

import Navbar from './navbar';
import theme from './theme';

export default function Layout(props) {
    return (
        <div className="page-layout">
            <Head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157421603-1"></script>
                <script dangerouslySetInnerHTML={{__html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'UA-157421603-1');
                `}} />
                <title>Uni Esports Group</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar />
            {props.children}
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }
                body, html {
                    color: #2ac4ee;
                    font-family: 'Raleway', sans-serif;
                    margin: 0px;
                    background-color: #ecfbff;
                }
                .page-layout {
                    padding-top: 110px;
                }
                .container {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                    width: 1170px;
                }
                .default-text {
                    font-size: 20px;
                    color: ${theme.colors["dark-blue"]};
                    letter-spacing: 1px;
                }
                .default-heading {
                    font-size: 40px;
                    color: ${theme.colors["dark-blue"]};
                    letter-spacing: 1px;
                    font-weight: 600;
                }
                .ReactModal__Content {
                    padding: 0px !important;
                    width: fit-content;
                    height: fit-content;
                    margin: auto;
                }
                .ReactModal__Overlay {
                    z-index: 1001;
                }
            `}</style>
    </div>
    )
}