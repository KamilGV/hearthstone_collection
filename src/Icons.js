import React from 'react';
import heroImage from './images/hero-image.png';
import spelImage from './images/spel-image.png';
import awardImage from './images/award-image.png';
import anomImage from './images/anom-image.png';
import minionImage from './images/minion-image.png';
import taskImage from './images/task-image.png';

import './Icons.css';


export function HeroImage() {
  return <div className='ImageContainer'><img src={heroImage} alt="Hero" className="image-icon" /></div>;
}

export function SpelImage() {
    return <div className='ImageContainer'><img src={spelImage} alt="Spel" className="image-icon" /></div>;
}

export function AnomImage() {
    return <div className='ImageContainer'><img src={anomImage} alt="Anom" className="image-icon" /></div>;
}

export function MinionImage() {
    return <div className='ImageContainer'><img src={minionImage} alt="Minion" className="image-icon" /></div>;
}

export function TaskImage() {
    return <div className='ImageContainer'><img src={taskImage} alt="Task" className="image-icon" /></div>;
}

export function AwardImage() {
    return <div className='ImageContainer'><img src={awardImage} alt="Award" className="image-icon" /></div>;
}