import React from "react";
import Sprite from "../sprite";

const Actor = ({sprite, data, position = { x:0, y: 0}, step = 0, dir = 0}) =>{
    const { h, w } = data;

    return(
        <Sprite image={sprite} 
        position={position}
        data={{
            x: step * w,
            y: dir * h,
            h,
            w,
        }}/>
    )
}

export default Actor;