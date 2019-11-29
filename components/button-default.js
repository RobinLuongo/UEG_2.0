import theme from './theme';

export default function Button(props) {
    return (
        <div className={`button-default ${props.className}`} onClick={props.onClick()}>
            <span className="button-text">{props.text}</span>
            <style>{`
                .button-default {
                    border-radius: 7px;
                    border: 2px solid;
                    width: fit-content;
                }
                .button-default:hover {
                    background-color: ${theme.colors["clear-grey"]};
                }
                .button-text {
                    padding: 2px 15px;
                    font-size: 20px;
                    display: inline-block;
                    letter-spacing: 1px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}