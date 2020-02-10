import TeamBox from '../components/team-box'

export default function OurTeam() {
    return (
        <div className="container">
            <h1 className="default-heading">Our Team</h1>
            <div className="team-container">
                <TeamBox
                    className='team-box'
                    imgRef='/images/mcneil-headshot.jpeg'
                    name='Alex McNeil'
                    title='President & Co-founder'
                    bio='Alex has bootstrapped two successful businesses in the education space, overseeing them from startup to multiple employee exits. He holds an MA from San Francisco State in political theory, and cares deeply about issues of equity and mental health in education. At Uni, Alex coordinates efforts to build the first generation of best-in-class collegiate esports programs.'
                />
                <TeamBox
                    className='team-box'
                    imgRef='/images/mcneil-headshot.jpeg'
                    name='Jesse Bodony'
                    title='CEO & Co-founder'
                    bio='Jesse treads the line between esports and athletic administration and leadership. Having captained the U23 division of the Colorado Rapids MLS team, led the implementation of Dominican University’s esports program, and gained extensive experience in administration and academic program creation, he understands the process of launching a program from multiple angles. At Uni, Jesse leads internal operations and organizational strategy. He is an avid gamer and former Starcraft II grandmaster.'
                />
                <TeamBox
                    className='team-box'
                    imgRef='/images/mcneil-headshot.jpeg'
                    name='Robin Luongo'
                    title='Head of Technology'
                    bio='Robin learned about programming at the same time he started gaming, at age six, when his dad worked as a developer for the iconic software company Broderbund. As a former software engineer and network and systems administrator, Robin fills the role of CTO at Uni, helping schools to understand the all-important technological side of esports and program development.'
                />
                <TeamBox
                    className='team-box'
                    imgRef='/images/mcneil-headshot.jpeg'
                    name='Matthew C. Bronson, PhD'
                    title='Advisor'
                    bio='A veteran educator and higher ed consultant, Matthew has over 25 years of experience in higher education assessment and executive planning. He is currently an advisor to the UC Davis-based LibreText, the largest open educational resource (OER) initiative in the world. Matthew brings to Uni his deep experience with program design and a passion for charting the edge of innovation in higher education.'
                />
                <TeamBox
                    className='team-box'
                    imgRef='/images/mcneil-headshot.jpeg'
                    name='Suresh Appavoo Ed.D'
                    title='Advisor'
                    bio='Suresh Appavoo has over 18 years in diversity leadership roles in higher education and currently serves as the Chief Diversity and Inclusivity Officer for Southern Oregon University. Suresh joins Uni with the goal of helping steer esports toward a more equitable and diverse future on college and university campuses across the United States.'
                />
            </div>
            <style jsx>{`
                .container {
                    max-width: 1350px;
                }
                .team-container {
                    display: flex;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                }
                h1 {
                    text-align: center;
                    margin-top: 30px;
                    margin-bottom: 50px;
                }
                :global(.team-box) {
                    margin: 30px 20px;
                }
            `}</style>
        </div>
    )
}