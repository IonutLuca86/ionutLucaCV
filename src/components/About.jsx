import '../components/About.css'

export default function About () {
    return(
        <div className="about-container">
            <div className='about-title'>
                <p className="text-large blue">More about me</p>
            </div>
                
                <div className="vl"></div>
                <div className="about-text-container">
                    <p className='text-normal gray'><span className='text-large blue'>Ambitious .Net developer student on the way to
                 new outputs!</span><br/>
                Structured, proactive, energetic and joyful person, who strives to 
                constantly evolve, are just a few words that would describe me as a 
                person.<br/>
                My previous jobs in IT support and the recycling industry give me a
                 deeper customer understanding of the end-user experience, which I am 
                 happy to contribute in addition to regular .NET development.<br/>
                I have skills in C#, JavaScript, React, OOP, SQL Server, LINQ, REST API 
                development, HTML, CSS, version management with Git, and started training myself to develop according to agile frameworks such as Scrum and Kanban.
                When it comes to work, I am open to all kinds of challenges and I like
                 working on things that require problem solving.<br/>
                I enjoy working independently as well as in a group, on site or remotely.
            </p>
                </div>
        </div>
    );
}