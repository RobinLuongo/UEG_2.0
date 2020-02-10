import theme from './theme'

export default function ServicesModal(props) {
    return (
        <div className="sm-container">
            <div className="sm-border">
                {
                    props.content == 'data' ?
                        <div>
                            <h1 className="default-heading">Understand the landscape for esports at your institution.</h1>
                            <p className="default-text">To launch a new esports program, it’s important to understand the interests and demographics of students on campus, the sentiments of stakeholder groups, and the costs and ROI of the initiative. Our Data Collection & Analysis package helps unearth the local information you need to make a decision about esports from a place of confidence and knowledge. </p>
                            <ul className="list">
                                <li><em>Student Survey:  </em><div>A survey designed to chart the perceptions of your students toward esports.</div></li>
                                <li><em>Stakeholder Analysis:  </em><div>Anticipate the landscape of opinions about esports and the opportunities for resource-sharing among stakeholders on campus while bubbling up potential program champions.</div></li>
                                <li><em>Cost, Facilities & ROI Analysis: </em><div>Understand detailed operational expenses for the esports initiative, ROI opportunities, and floor plan layouts for your esports arena.</div></li>
                                <li><em>Partnership Procurement: </em><div>We provide a ready-made list of partners in the community who you can tap for support with the esports initiative and make the first contact for you.</div></li>
                            </ul>
                        </div>
                        : props.content == 'services' ?
                            <div>
                                <h1 className="default-heading">Support for programs at any stage of development</h1>
                                <p className="default-text">Whether you’re only beginning to consider esports or are already committed and looking to manifest your program on campus, we have services designed for every phase in the process of program creation.</p>
                                <ul className="list">
                                    <li><em>Esports Pitch Deck: </em><div>Understand the facts and data behind the global phenomenon of esports--in the context of data drawn from your own institution. </div></li>
                                    <li><em>Competitive Readiness & Gamer Wellness:</em><div>Learn concrete best practices for league onboarding, team roster development & game selection, and training routines with a focus on player wellness in esports.</div></li>
                                    <li><em>Recruitment, Retention, & Enrollment Optimization: </em><div>Receive concrete resources for engaging students on your campus and creating a pipeline to bring new students into your esports organization and campus community.</div></li>
                                    <li><em>Curricular Integration:</em><div>Build the connection between esports and the larger co-curriculum, unlocking the vast educational opportunity inherent in esports and gaming.</div></li>
                                    <li><em>Occupational Pathways:</em><div>Help your students tap into the vast, burgeoning field of esports and gaming.</div></li>
                                </ul>
                            </div>
                            :
                                <div>
                                    <h1 className="default-heading">Bringing esports education to your campus</h1>
                                    <p className="default-text">s part of our ongoing mission to educate campus decision-makers about collegiate esports, we offer a series of educational presentations and interventions designed to clearly explain the power of esports on campus. Choose from one of our educational presentations and bring us to campus to meet you and your colleagues.</p>
                                    <ul className="list">
                                        <li><em>Esports 101: Introduction to the Collegiate Space: </em><div>This introductory presentation covers data about the demographics, market, and scope of the global phenomenon of esports.</div></li>
                                        <li><em>The Case for Esports: Educating Stakeholders: </em><div>In this presentation, we articulate the case for esports by working through common objections and misconceptions.</div></li>
                                        <li><em>Esports Program Creation Best Practices: </em><div>We lay out some of the best practices in collegiate esports program creation.</div></li>
                                    </ul>
                                </div>
                }
            </div>
            <style jsx>{`
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
                    color: white;
                }
                .default-heading {
                    color: white;
                }
                .default-text {
                    color: white;
                }
                .list {
                    font-size: 18px;
                    list-style: none;
                }
                .list > li {
                    padding: 10px 0px;
                    color: ${theme.colors["dark-blue"]};
                    font-weight: 600;
                }
                .list > li div {
                    padding: 5px 0px 0px 20px;
                }
                .list em {
                    color: white;
                    font-weight: 200;
                }
            `}</style>
        </div>
    )
}