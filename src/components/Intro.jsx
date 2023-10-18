import '../components/Intro.css'

export default function Intro() {
    return (

        <div className='intro-container'>
            <div className="message-container">                
                <span id="spin"></span>                
            </div>
            <div className='intro-text-container'>
                <p className='text-normal gray'>My name is 
                <span className='page-title red'> Ionut Luca </span>
                and here you have the opportunity to find out more about me.</p>
                <p className='text-normal gray'>I am currently studying to became a 
                <span className='text-xlarge red'> Fullstack Developer </span>
                and I am  looking for the best company to do my intership and/or get a job. </p>
            </div> 
        </div>
    );
}