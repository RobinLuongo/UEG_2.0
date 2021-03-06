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
                    text-align: justify;
                }
                .box-container {
                    text-align: center;
                    width: 400px;
                }
                .headshot {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    margin: 0px auto 15px auto;
                    background-image: url(${props.imgRef});
                    box-shadow: 0 0 20px 4px #00000029;
                }
                .alex .headshot {
                    background-size: 110%;
                    background-position: top -46px right 5px;
                }
                .jesse .headshot {
                    background-size: 120%;
                    background-position: top 0px left -16px;
                }
                .robin .headshot {
                    background-size: 160%;
                    background-position: top 0px right -68px;
                }
                .name {
                    margin-top: 5px;
                }
                @media(max-width: 900px) {
                    .default-text.bio {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    )
}