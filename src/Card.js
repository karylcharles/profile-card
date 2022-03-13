import React, { Component } from 'react';
import './Card.scss';
import profile from './images/image-victor.jpg';

class Card extends Component{
    render(){
        return(
            <div className='Card'>
                <div className='Card-top'></div>
                <div className='Card-content'>
                    <img src={profile} alt="victor"/>
                    <h3>Victor Crest <span>26</span></h3>
                    <p>London</p>
                </div>
                <div className='Card-bottom'>
                    <div>
                        <span className='Card-bottom__stats'>80k</span>
                        <span className='Card-bottom__numbers'>Followers</span>
                    </div>
                    <div>
                        <span className='Card-bottom__stats'>803k</span>
                        <span className='Card-bottom__numbers'>Likes</span>
                    </div>
                    <div>
                        <span className='Card-bottom__stats'>1.4k</span>
                        <span className='Card-bottom__numbers'>Photos</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Card;