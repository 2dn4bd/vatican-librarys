import { FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const Star = ({rating}) => {
    const ratingStar = Array.from({length:5},(element, index) =>{
        let number = index + 0.5;
        return <span key={index}>
            {
                rating > index + 1 ? <FaStar className='icon'></FaStar> :  rating > number ? <FaStarHalfAlt ></FaStarHalfAlt> : <AiOutlineStar className='icon'></AiOutlineStar>
            }
            </span>
    });
    return (
        <div className='text-yellow-400 flex'>
            {ratingStar}
        </div>
    )
};

export default Star;