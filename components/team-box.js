export default function TeamBox(props) {
    return (
        <div className={`${props.className} box-container`}>
            {
                props.imgRef ? 
                <div className='circle'>
                    <div className='headshot'>
                        {/* <img src={props.imgRef} alt={props.name + ' headshot'} className='headshot'></img> */}
                    </div>
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
                    box-shadow: 0px 0px 20px 0px #4c4c4c78;
                }
                .alex .headshot {
                    background-size: 110%;
                    background-position: top -46px right 5px;
                }
                .jesse .headshot {
                    background-size: 120%;
                    background-position: top -2px left -19px;
                }
                .robin .headshot {
                    background-size: 160%;
                    background-position: top 0px right -68px;
                }
                .circle {
                    background-image: url(/images/circle.png);
                    background-size: 100%;
                    background-position: top 1px left -1px;
                    background-repeat: no-repeat;
                    height: 300px;
                    width: 300px;
                    margin: auto;
                    display: flex;
                    align-items: center;
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