import React from 'react';
// import i from '../../data/sprites/skins/m1.png'

const Sprite = ({image, data, position}) =>{
    const { x, y, h, w } = data;

    return(
        <div style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${window.location.origin + image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `-${x}px -${y}px`
        }}>

        </div>
    )
}

export default Sprite;