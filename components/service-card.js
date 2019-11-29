import theme from './theme'

export default function ServiceCard(props) {
    return (
        <div className="card-container">
            <div className="card-border">
                <div className="card-title">
                    {props.cardTitle}
                </div>
                <div className="click-text">click to see more</div>
                <img className="card-img" src={props.cardImg}></img>
            </div>
            <style>{`
                .card-container {
                    width: 300px;
                    height: 500px;
                    background-color: ${theme.colors["med-blue"]};
                    padding: 10px;
                }
                .card-border {
                    display: flex;
                    flex-direction: column;
                    border: 2px solid white;
                    border-radius: 7px;
                    height: 100%;
                }
                .card-title {
                    color: white;
                    font-size: 20px;
                    align-self: center;
                    margin-top: 50px;
                }
                .click-text {
                    color: ${theme.colors["dark-blue"]};
                    align-self: center;
                    margin-top: 120px;
                }
                .card-img {
                    height: 125px;
                    align-self: center;
                    margin-top: 85px;
                }
            `}</style>
        </div>
    )
}