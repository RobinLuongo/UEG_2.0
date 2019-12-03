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
                    width: 275px;
                    height: 425px;
                    background: radial-gradient(circle, rgba(42,196,238,1) 0%, rgba(42,196,238,1) 10%, rgba(52,139,200,1) 100%);
                    padding: 10px;
                    margin-right: 10px;
                    margin-left: 50px;
                    align-self: center;
                    box-shadow: 0px 16px 14px 0px #6d6d6d;
                }
                .card-container:hover {
                    width: 300px;
                    height: 450px;
                    cursor: pointer;
                    // margin-left: 30px;
                    // margin-right: 0px;
                }
                .card-border {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border: 2px solid white;
                    border-radius: 7px;
                    height: 100%;
                }
                .card-title {
                    color: white;
                    font-size: 20px;
                    align-self: center;
                    height: 50px;
                    margin-top: 50px;
                    text-align: center;
                }
                .click-text {
                    color: ${theme.colors["dark-blue"]};
                    align-self: center;
                    font-weight: 600;
                }
                .card-img {
                    height: 125px;
                    align-self: center;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    )
}