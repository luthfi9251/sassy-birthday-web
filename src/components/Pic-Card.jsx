import { useState } from 'react'
import { useSpring, a } from 'react-spring'

export default function Card({pict, text}){

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return(
        <div className="pict-cont" onClick={()=>set(state=>!state)} >
            <a.div className="image front" style={{ opacity: opacity.to(o => 1-o), transform }}>
                <img src={pict} alt="" />
            </a.div>
            <a.div className="image back" style={{
            opacity,
            transform,
            rotateY: '180deg'
            }}>
                <div className="caption">
                    <span className="capt-text">
                    {text}
                    </span>
                </div>
            </a.div>
        </div>
    )
}