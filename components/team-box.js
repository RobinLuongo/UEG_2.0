export default function TeamBox(props) {
    return (
        <div className={`${props.className} box-container`}>
            {
                props.imgRef ? 
                <div className='headshot'>
                    {/* <img src={props.imgRef} alt={props.name + ' headshot'} className='headshot'></img> */}
                </div>
                : ''
            }
            <div className="name default-text">{props.name}</div>
            <div className="title">{props.title}</div>
            <p className="bio default-text">{props.bio}</p>
            <style jsx>{`
                .default-text.bio {
                    font-size: 18px;
                }
                .box-container {
                    text-align: center;
                    width: 400px;
                }
                .headshot {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    margin: auto;
                    background-image: url(${props.imgRef});
                }
                .alex .headshot {
                    background-size: 110%;
                    background-position: top -46px right 5px;
                }
                .jesse .headshot {
                    background-size: 100%;
                    transform: rotate(90deg);
                    background-position: top 37px left 0px;
                }
                .robin .headshot {
                    background-size: 160%;
                    background-position: top 0px right -68px;
                }
                }
                .name {
                    margin-top: 5px;
                }
            `}</style>
        </div>
    )
}