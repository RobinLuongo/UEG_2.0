import theme from './theme';
import Button from './button-default';

export default function Hero(props) {
    const buttonStyles = `
                    background-color: #3333339c;
    `

    return (
        <div>
            <div className="hero-container">
                <div className="content-container">
                    <div className="tagline-box">
                        <div>Creating your collegiate esports program. Together.</div>
                    </div>
                    <Button className="button"
                        text="Services"
                        onClick={scrollToServices}
                        styles={buttonStyles}
                    >
                    </Button>
                </div>
            </div>
            <div className="pillars-container">
                <div className="container">
                    <span>Competitive Excellence &nbsp;&nbsp;| &nbsp;&nbsp;Diversity and Inclusion &nbsp;&nbsp;| &nbsp;&nbsp;Student Engagement</span>
                </div>
            </div>
            <style jsx>{`
                    .hero-container {
                        background-image: url("/images/HERO_BLUE.jpg");
                        background-size: 100% auto;
                        background-position: center;
                        background-repeat: no-repeat;
                        height: 35vw;
                        display: flex;
                        justify-content: center;
                    }
                    .content-container {
                        align-self: center;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                    .tagline-box {
                        color: ${theme.colors['med-blue']};
                        background-color: #3333339c;;
                        align-self: center;
                        font-size: 30px;
                        padding: 60px;
                        max-width: 550px;
                        text-align: center;
                        letter-spacing: 2px;
                        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
                    }
                    .button {
                        background-color: #3333339c;
                    }
                    .pillars-container {
                        background-color: ${theme.colors["med-blue"]};
                        font-size: 26px;
                        background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(42,196,238,1) 68%, rgba(26,118,186,1) 100%);
                    }
                    .pillars-container > .container {
                        text-align: center;
                    }
                    .pillars-container span {
                        color: #165d92;
                        margin: auto;
                        display: inline-block;
                        padding: 40px 0px;
                        font-weight: 900;
                        letter-spacing: 1px;
                    }
                    @media(max-width: 900px) {
                        .hero-container {
                            height: 60vw;
                            background-size: 100% 100%;
                        }
                        .tagline-box {
                            font-size: 24px;
                            padding: 30px;
                        }
                        .pillars-container {
                            font-size: 16px;
                        }
                    }
                    @media(max-width: 480px) {
                        .hero-container {
                            height: 300px;
                        }
                        .tagline-box {
                            margin: 0px 20px;
                        }
                    }
                `}</style>
        </div>
    )
}

function scrollToServices() {
    const element = document.querySelector('.mission')
    window.scroll({
        top: element.offsetTop - 100,
        left: 0,
        behavior: 'smooth'
    })
}