import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {BiSolidStarHalf} from 'react-icons/bi';

export default function Languages() {
    return (
        <div className='work-container'>
            <div className='work-title'>
                <p className='text-large blue'>Languages</p>
            </div>
            <div className='vl-education'></div>
            <div className='work-text-container'>
               <div className='skills-list'>
                         <div className='skills'>
                        <p className='text-normal gray'>English </p>
                        <p className='text-normal gray '><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <BiSolidStarHalf/></p>
                    
                    </div>
                     <div className='skills'>
                        <p className='text-normal gray'>Swedish</p>
                        <p className='text-normal gray '><AiFillStar/><AiFillStar/>
                    <AiFillStar/><AiOutlineStar/>
                    <AiOutlineStar/></p>
                    </div>
                    <div className='skills'>
                         <p className='text-normal gray'>Romanian</p>
                          <p className='text-normal gray '><AiFillStar/><AiFillStar/>
                    <AiFillStar/><AiFillStar/>
                    <AiFillStar/></p>
                    </div>
              </div>               
            </div>
            </div>
    )
}