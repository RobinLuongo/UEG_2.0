import Head from 'next/head'

import theme from '../components/theme'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Services from '../components/services';
import WhitepaperTeaser from '../components/whitepaper-teaser';
import PricetoolTeaser from '../components/price-tool-teaser';
import Partners from '../components/partners';
import Contact from '../components/contact';

function Home() {
    return (
        <div>
            <Head>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
                    Calendly.initBadgeWidget({ url: 'https://calendly.com/uni_jesse', text: "Questions about bringing esports to campus? Let's schedule a time to talk.", color: '#00a2ff', textColor: '#ffffff', branding: false });
                `}} />
            </Head>
            <div className="main">
                <Hero></Hero>
                <Services></Services>
                <WhitepaperTeaser></WhitepaperTeaser>
                <PricetoolTeaser></PricetoolTeaser>
                <Partners></Partners>
                <Contact></Contact>
            </div>
        </div>
    )
}
  
export default Home