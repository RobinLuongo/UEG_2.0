import theme from './theme';
import Button from './button-download';

export default function WPTeaser() {
    return (
        <div className="wpt-container">
                <h1 className="default-heading container">The Uni Esports Program Rubric</h1>
            <div className="wp-banner">
                <div className="container">
                    <a href="/docs/UEG_whitepaper_1.pdf" download>
                        <img src="/images/whitepaper_thumbnail.jpg" className="wp-img" alt="UEG collegiate esports whitepaper - athletic directors"></img>
                    </a>
                    <div className="wp-text">
                        <h3>State of the Game: Collegiate Esports and the Future of Gaming in Higher Education</h3>
                        <p className="default-text">This rubric synthesizes data gained from three in-depth interviews and dozens of conversations with directors of esports programs at institutions of higher education in the US regarding the common obstacles, strategies, and outcomes associated with the launch and growth of a high-quality esports program.</p>
                    </div>
                </div>
            </div>
            <div className="container"> 
                <Button
                    className="wp-button"
                    text="Download"
                    fileName="UEG_whitepaper.pdf"
                    downloadPath="/docs/UEG_whitepaper_1.pdf"
                >
                </Button>
            </div>
            <style jsx>{`
                .wpt-container {
                    margin-bottom: 200px;
                }
                .wpt-content {
                    display: flex;
                    flex-direction: column;
                }
                .default-heading {
                    align-self: flex-end;
                    text-align: right;
                    margin-bottom: 50px;
                }
                .wp-banner {
                    width: 100%;
                    height: 250px;
                    background: linear-gradient(275deg, rgba(0,212,255,1) 0%, rgba(42,196,238,1) 70%, rgba(26,118,186,1) 100%);
                    position: relative;
                    box-shadow: 0px 8px 13px 9px #00000052;
                }                
                .wp-img {
                    height: 350px;
                    width: auto;
                    position: absolute;
                    top: -50px;
                    box-shadow: 0 5px 8px 0px #00000045;
                }
                .wp-text {
                    color: ${theme.colors["dark-blue"]};
                    margin-left: 400px;
                    padding-top: 20px;
                }
                .wp-text h3 {
                    font-size: 26px;
                    line-height: 30px;
                    margin-bottom: 0px;
                }
                .wp-text p {
                    margin-top: 10px;
                    line-height: 30px;
                }
            `}</style>
            <style>{`
                .wp-button {
                    float: right;
                    margin-top: 30px;
                }
            `}</style>
        </div>
    )

    function downloadPdf() {
        //window.open("/docs/UEG_whitepaper_1.pdf");
    }
}