import theme from './theme';
import Button from './button-default';

export default function PTTeaser() {
    return (
        <div className="pt-container">
                <h1 className="default-heading container">Price Tool</h1>
            <div className="pt-banner">
                <div className="container">
                    <div className="pt-text">
                        <h3>State of the Game: Collegiate Esports and the Future of Gaming in Higher Education</h3>
                        <p className="default-text">Compiled from data gathered from over 400 Athletic Directors from colleges around the country, our White paper provides the most accurate snapshot of the collegiate esports space.</p>
                    </div>
                    <a href="/docs/UEG_whitepaper_1.pdf" download>
                        <img src="/images/whitepaper_thumbnail.jpg" className="pt-img" alt="UEG collegiate esports whitepaper - athletic directors"></img>
                    </a>
                </div>
            </div>
            <div className="container">
                <Button
                    text="Price Tool"
                    className="ptt-button"
                >
                </Button>
            </div>
            <style jsx>{`
                .pt-container {
                    margin-bottom: 100px;
                }
                .pt-content {
                    display: flex;
                    flex-direction: column;
                }
                .default-heading {
                    align-self: flex-end;
                    text-align: left;
                    margin-bottom: 50px;
                }
                .pt-banner {
                    width: 100%;
                    height: 250px;
                    background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(42,196,238,1) 70%, rgba(26,118,186,1) 100%);
                    position: relative;
                    box-shadow: 0px 8px 13px 9px #00000052;
                }
                .pt-banner > container {
                    position: relative;
                }       
                .pt-img {
                    height: 350px;
                    width: auto;
                    position: absolute;
                    top: -50px;
                    right: 0px;
                    box-shadow: 0 5px 8px 0px #00000045;
                }
                .pt-text {
                    color: ${theme.colors["dark-blue"]};
                    padding-top: 20px;
                    margin-right: 400px;
                }
                .pt-text h3 {
                    font-size: 26px;
                    line-height: 30px;
                    margin-bottom: 0px;
                }
                .pt-text p {
                    margin-top: 10px;
                    line-height: 30px;
                }
            `}</style>
            <style>{`
                .ptt-button {
                    margin-top: 30px;
                }
            `}</style>
        </div>
    )

    function downloadPdf() {
        //window.open("/docs/UEG_whitepaper_1.pdf");
    }
}