import React from "react";
import useKeyPress from "../../hooks/use-key-press";
import Actor from "../actor";
// import path from '../../data/sprites/skins'
import useWalk from "../../hooks/use-walk";

const Player = ({ skin }) => {
    const {dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32
    }
    

    useKeyPress((e) => {
        walk(e.key.replace('Arrow', '').toLowerCase())
        e.preventDefault();
    })

    return (
        <Actor sprite={`/sprites/skins/${skin}.png`} data={data} step={step} dir={dir} position={position}/>
    )
}

export default Player;