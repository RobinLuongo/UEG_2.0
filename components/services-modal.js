import theme from './theme'

export default function ServicesModal(props) {
    return (
        <div className="sm-container">
            <div className="sm-border">
                
            </div>
            <style>{`
                .sm-container {
                    width: 1000px;
                    height: 800px;
                    padding: 20px;
                    background-color: ${theme.colors["med-blue"]}
                }
                .sm-border {
                    border: 2px solid white;
                    border-radius: 7px;
                    width: 100%;
                    height: 100%;
                    padding: 40px;
                }
            `}</style>
        </div>
    )
}