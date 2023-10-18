  
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {BiSolidStarHalf} from 'react-icons/bi';
import '../components/Skills.css'

  
  export default function Skills() {
    return(
         <div className='work-container'>
            <div className='work-title'>
                <p className='text-large blue'>Skills</p>
            </div>
            <div className='vl-skills'></div>
            <div className='work-text-container'>
                <div className='skills-list'>    
                <div className='skills'>
                    <p className='text-normal gray'>C#/.NET</p>
                    <p className='text-normal gray'><AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/>
                    <AiOutlineStar/></p>
                </div>
                 <div className='skills'>
                     <p className='text-normal gray'>Database </p>
                     <p className='text-normal gray'><AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/>
                    <AiOutlineStar/></p>
                 </div>
                <div className='skills'>
                    <p className='text-normal gray'>JavaScript </p>
                    <p className='text-normal gray '><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
                    <AiOutlineStar/></p>
               </div>
                <div className='skills'>
                    <p className='text-normal gray'>React </p>
                    <p className='text-normal gray '><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
                    <AiOutlineStar/></p>
                </div>
                <div className='skills'>
                    <p className='text-normal gray'>HTML/CSS </p>
                    <p className='text-normal gray'><AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/>
                    <AiOutlineStar/></p>
                </div>
                <div className='skills'>
                    <p className='text-normal gray'>IT-Support </p>
                    <p className='text-normal gray'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <BiSolidStarHalf/></p>
                </div>
                <div className='skills'>
                    <p className='text-normal gray'>Windows</p>
                    <p className='text-normal gray'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <BiSolidStarHalf/></p>
                </div>
               <div className='skills'>
                <p className='text-normal gray'>Linux</p>
                <p className='text-normal gray'><AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/>
                    <AiOutlineStar/></p>
               </div> 
              </div>               
            </div>
            </div>
    );
  }