import Head from 'next/head';

import theme from '../components/theme'
import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import Services from '../components/services';

function Home() {
    return (
        <div>
            <Head>
                <title>Uni Esports Group</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar></Navbar>
            <div className="main">
                <Hero></Hero>
                <div>
                    <Services></Services>
                </div>
            </div>
            <style global jsx>{ `
                * {
                    box-sizing: border-box;
                }
                body, html {
                    color: #2ac4ee;
                    font-family: 'Raleway', sans-serif;
                    margin: 0px;
                }
                .main {
                    top: 110px;
                    position: relative;
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
  
export default Home