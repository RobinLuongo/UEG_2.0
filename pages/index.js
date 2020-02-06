
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