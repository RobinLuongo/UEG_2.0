import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/hero';

function Home() {
    return (
        <div>
            <Head>
                <title>Uni Esports Group</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
            </Head>
            <style global jsx>{ `
                * {
                    box-sizing: border-box;
                }
                body, html {
                    color: #2ac4ee;
                    font-family: 'Raleway', sans-serif;
                    margin: 0px;
                }
                .container {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                    width: 1170px;
                }
            `}</style>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    )
}
  
export default Home