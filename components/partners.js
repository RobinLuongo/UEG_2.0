export default function Partners() {
    return (
        <div className="partners-container container">
            <h1 className="default-heading">Our Partners</h1>
            <p className="default-text">
                Connect with our premier network of industry partners. From computers to coaches - we've got you covered. We connect you to the industry partnerships you need to build and sustain your program. Our partners work at every level of the esports pipelane, providing support in facilities, hardware and peripherals, recruitment, coaching, league membership, broadcasting and other areas crucial to your esports launch.
            </p>
            <div className="logos-container">
                <img className="partner-logo" src="/images/MSI.png"></img>
                <img className="partner-logo" src="/images/SecretLab.png"></img>
                <img className="partner-logo" src="/images/Velocity.png"></img>
                <img className="partner-logo" src="/images/GamerSensei.png"></img>
            </div>
            <style jsx>{`
                .partners-container {
                    margin-bottom: 100px;
                }
                .default-heading {
                    float: right;
                }
                .default-text {
                    display: inline-block;
                    line-height: 30px;
                }
                .logos-container {
                    display: flex;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    margin-top: 20px;
                }
                .partner-logo {
                    height: 100px;
                }
            `}</style>
        </div>
    )
}