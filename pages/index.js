import Head from 'next/head';

import Navbar from '../components/Navbar'

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
                }
                .container {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                    width: 1170px;
                }
            `}</style>
            <Navbar
                theme={theme}
            ></Navbar>
        </div>
    )
}

const theme = {
    colors: {
        'light-blue': '#c2f0fc',
        'med-blue': '#2ac4ee',
        'reg-blue': '#23a3d8',
        'dark-blue': '#1a76ba'
    }
}
  
export default Home