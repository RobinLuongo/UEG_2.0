import theme from './theme';
import Button from './button-default';

export default function Hero(props) {
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
                    >
                    </Button>
                </div>
            </div>
            <div className="pillars-container">
                <div className="container">
                    <span>Competitive Excellence | Diversity and Inclusion | Student Engagement</span>
                </div>
            </div>
            <style>{`
                    .hero-container {
                        background-image: url("/images/hero.jpg");
                        background-size: 100% auto;
                        background-repeat: no-repeat;
                        height: 600px;
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
                        background-color: #33333347;
                        align-self: center;
                        font-size: 30px;
                        padding: 60px;
                        max-width: 550px;
                        text-align: center;
                        letter-spacing: 2px;
                        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
                    }
                    .button {
                        margin-top: 10px;
                        align-self: flex-end;
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
                `}</style>
        </div>
    )
}

function scrollToServices() {
    console.log("clicked")
}