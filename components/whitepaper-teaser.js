import theme from './theme';
import Button from './button-download';

export default function WPTeaser() {
    return (
        <div className="wpt-container">
                <h1 className="default-heading container">The Uni Esports Program Rubric</h1>
            <div className="wp-banner">
                <div className="container">
                    <a href="/docs/Uni_Esports_Program_Rubric.pdf" download>
                        <img src="/images/rubric_thumb.png" className="wp-img" alt="UEG collegiate esports rubric"></img>
                    </a>
                    <div className="wp-text">
                        <h3>Lessons From the First Wave: An Empirical Framework for Institutionalizing Esports on Campus</h3>
                        <p className="default-text">This rubric synthesizes data from three interviews and dozens of conversations with directors of esports programs regarding the common obstacles, strategies, and outcomes associated with the growth and launch of a high-quality esports program.</p>
                    </div>
                </div>
            </div>
            <div className="container"> 
                <Button
                    className="wp-button"
                    text="Download"
                    fileName="UEG_Program_Rubric.pdf"
                    downloadPath="/docs/Uni_Esports_Program_Rubric.pdf"
                >
                </Button>
            </div>
            <style jsx>{`
                .wpt-container {
                    margin-bottom: 200px;
                    padding-top: 50px;
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
                .wp-banner > .container {
                    display: flex;
                    align-items: center;
                    height: 100%;
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
                }
                .wp-text h3 {
                    font-size: 26px;
                    line-height: 30px;
                    margin: 0px;
                }
                .wp-text p {
                    margin-top: 10px;
                    margin-bottom: 0px;
                    line-height: 30px;
                }
                @media(max-width: 900px) {
                    .wpt-container {
                        padding-top: 30px;
                        margin-bottom: 100px;
                    }
                    .wp-banner {
                        background: inherit;
                        box-shadow: none;
                        height: fit-content;
                    }
                    .wp-banner > .container {
                        flex-direction: column;
                    }
                    .wp-img {
                        position: inherit;
                        margin-bottom: 50px;
                    }
                    .wp-text {
                        margin: 0px;
                    }
                    .default-heading {
                        text-align: center;
                    }
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