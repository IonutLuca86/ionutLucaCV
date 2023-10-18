import {PiCookingPotBold} from 'react-icons/pi';
import {LuBike,LuMusic,LuTent} from 'react-icons/lu';

export default function Interests() {
    return(
        <div className='work-container'>
            <div className='work-title'>
                <p className='text-large blue'>Interests</p>
            </div>
            <div className='vl-interests'></div>
            <div className='work-text-container'>
                 <div className='skills skills-list'>
                        <p className='text-xlarge gray'><PiCookingPotBold/></p>
                        <p className='text-xlarge gray'><LuBike/></p>
                        <p className='text-xlarge gray'><LuMusic/></p>
                        <p className='text-xlarge gray'><LuTent/></p>
                    </div>
              </div>               
            </div>
         
    )
}