import theme from './theme';

export default function Button(props) {
    return (
        <a
        className={`button-default ${props.className}`}
        download={props.fileName}
        href={props.downloadPath}
        >
            <span className="button-text">{props.text}</span>
            <style jsx>{`
                .button-default {
                    color: ${theme.colors["med-blue"]};
                    border-radius: 7px;
                    border: 2px solid;
                    width: fit-content;
                    display: block;
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
                @media(max-width: 900px) {
                    .button-text {
                        font-size: 16px;
                    }
                }
            `}</style>
        </a>
    )
}