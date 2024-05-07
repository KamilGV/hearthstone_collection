import './Card.css';
import CardModal from './Modal';
import React from 'react';
import Tilt from 'react-parallax-tilt';


function HearthstoneCard({card}){
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const changeIsModal = () => {
    setIsModalOpen(!isModalOpen)
    }

    return (
        <>
        <Tilt className="imageGridContainer" tiltReverse={true} scale={1.15} transitionSpeed={1000}>
            <img onClick={changeIsModal} className="herthstoneCardImg" src={card.battlegrounds.image}/>
        </Tilt>
        {isModalOpen&&<CardModal className="card-modal" card={card} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
        </>
    );
}

export default HearthstoneCard;