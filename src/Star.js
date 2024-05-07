import './Star.css'
import starImg from './images/star.png';
import unactiveStar from  './images/star-light.png'

export function StarActive({value}){
    return (
            <div className='star-img-container'>
                {/* <img src={starImg} alt="Star" className="star-img" /> */}
                <div class="star-value">{value}</div>
            </div>
    );
}

export function StarUnActive({value}){

    return (
        <div className='star-notactive-img-container'>
            {/* <img src={unactiveStar} alt="Star" className="star-img" /> */}
            <div class="star-value">{value}</div>
        </div>
    );
}
