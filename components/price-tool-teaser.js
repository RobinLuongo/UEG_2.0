import theme from './theme';
import Button from './button-download';

export default function PTTeaser() {
    return (
        <div className="pt-container">
                <h1 className="default-heading container">The Architects of Collegiate Esports Interviews</h1>
            <div className="pt-banner">
                <div className="container">
                    <div className="pt-text">
                        <h3>Bringing Esports to Campus</h3>
                        <p className="default-text">In this interview series with Mark Deppe (Director, UC Irvine Esports), Glenn Platt (Director, Miami University Esports), and AJ Dimick (Director, University of Utah Esports), we bring three of the leading voices in collegiate esports together to discuss the process of developing and institutionalizing a collegiate esports program.</p>
                    </div>
                    <a href="/docs/UEG_whitepaper_1.pdf" download>
                        <img src="/images/interview_thumb.PNG" className="pt-img" alt="download UEG collegiate esports interviews"></img>
                    </a>
                </div>
            </div>
            <div className="container">
                <Button
                    text="Download"
                    className="ptt-button"
                    fileName="The Architects of Collegiate Esports.pdf"
                    downloadPath="/docs/The_Architects_of_Collegiate_Esports.pdf"
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
                    box-shadow: 0px 8px 13px 9px #00000052;
                }
                .pt-banner > .container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 100%;
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
                    margin-right: 400px;
                }
                .pt-text h3 {
                    font-size: 26px;
                    line-height: 30px;
                    margin: 0px;
                }
                .pt-text p {
                    margin-top: 10px;
                    margin-bottom: 0px;
                    line-height: 30px;
                }
                @media(max-width: 900px) {
                    .pt-container {
                        padding-top: 30px;
                    }
                    .pt-banner {
                        background: inherit;
                        box-shadow: none;
                        height: fit-content;
                    }
                    .pt-banner > .container {
                        flex-direction: column;
                    }
                    .container > a {
                        order: -1;
                    }
                    .pt-img {
                        position: inherit;
                        margin-bottom: 50px;
                    }
                    .pt-text {
                        margin: 0px;
                    }
                    .default-heading {
                        text-align: center;
                    }
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