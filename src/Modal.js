import { Card } from '@consta/uikit/Card';
import {Modal} from '@consta/uikit/Modal';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/icons/IconClose';
import { Text } from '@consta/uikit/Text';
import { useEffect, useState } from 'react';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Modal.css'
import Belwe from './fonts/belwe_bold.otf'

function CardModal({card, setIsModalOpen, isModalOpen}) {
    const [imageCard, setImage] = useState(card.image)

    const changeImg = () =>{
        if (card.battlegrounds.imageGold != ""){
        setImage(card.battlegrounds.imageGold)}

        if (card.imageGold != ""){
            setImage(card.imageGold)}
    }
    
    return (
        <Modal
          className="ModalContainer"
          isOpen={isModalOpen}
          hasOverlay
          onClickOutside={() => setIsModalOpen(false)}
          onEsc={() => setIsModalOpen(false)}
        >

            {/* <div>
                <Button
                className='CloseButton'
                size="m"
                view="primary"
                label=""
                iconRight={IconClose}
                width="default"
                onClick={() => setIsModalOpen(false)}
                onlyIcon
                form="round"
                />
            </div> */}
            <div className="ModalInfo">
                <Tilt>
                    <div className='image-container'>
                    <img src={imageCard} onClick={changeImg} alt="" onerror="this.style.display='none'"/>
                    </div>
                </Tilt>
                <div className="ModalInfoText">
                    <Text className="cardName">{card.name}</Text>
                    {card.text}
                </div>
            </div>
        </Modal>
    );
  }

export default CardModal;