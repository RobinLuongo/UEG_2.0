import Button from './button-default';
import ServiceCard from './service-card';
import theme from './theme';

export default function Services() {
    return (
        <div className="services-container">
            <div className="container mission">
                <p className="default-text">We are a vaules-driven consultancy of higher education executives and first-generation esports program developers. We work with our clients to create innovative esports programs.</p>
                <Button
                    className="button"
                    text="About Our Team"
                    onClick={handleButtonClick}
                >
                </Button>
            </div>
            <div className="container services-text">
                <h1 className="default-heading">Services</h1>
                <p className="default-text">
                    Our services touch every level of esports program development. Whether you're beginning the planning process or already have a developed program on your campus, there's some-
                </p>
            </div>
            <ServiceCard
                cardTitle="Individual Services"
                cardImg="/images/Shape1.png"
            >
            </ServiceCard>
            <style>{`
                .services-container {
                    margin-top: 50px;
                }
                .mission {
                    display: flex;
                    flex-direction: column;
                }
                .button {
                    align-self: flex-end;
                    color: ${theme.colors["dark-blue"]}
                }
                .services-text {
                    margin-top: 100px;
                }
            `}</style>
        </div>
    )
}

function handleButtonClick() {
    return;
}