import { quotes } from '../assets';
import { feedback } from '../constants';

const Title = ({ titles }) => {
  return (
    <div>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};


const FeedbackCard = ({content, name, title, image}) => {
  return (
    <div className='flex justify-between flex-col px-5 py-5 rounded-[15px] w-[400px] md:mr-10 sm:mr-5 mr-2 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[24px] h-[15px] object-contain'/>
      <p className='font-mono font-normal text-[14px] leading-[32px] text-white my-10'>
        {content}
      </p>
      <div className='flex flex-row '>
        <img src={image} alt={name} className='w-[48px] h-[48px] rounded-full'/>

        <div className='flex flex-col ml-4'>
          <h4 className='font-mono font-normal text-[14px] leading-[24px] text-dimWhite'>
          {name}
          </h4>       
          <ul className='font-mono font-normal text-[10px] leading-[18px] text-dimWhite'>            
            {title.map((t, index) => (
              <li key={index}>{t}</li>
            ))}</ul> 
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard;