export default function TeamBox(props) {
    return (
        <div className={`${props.className} box-container`}>
            <div className='headshot'>
                {/* <img src={props.imgRef} alt={props.name + ' headshot'} className='headshot'></img> */}
            </div>
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
                    width: 200px;
                    height: 200px;
                    background-image: url(${props.imgRef});
                }
                .name {
                    margin-top: 5px;
                }
            `}</style>
        </div>
    )
}