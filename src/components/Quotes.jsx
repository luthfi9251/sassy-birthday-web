import {useState, useEffect} from 'react'

export default function Quotes(){

    let [data, setData] = useState([
        "You're beautiful",
        "You're amazing",
        "You're awesome",
        "You're kind",
        "You're loved",
        "You're my favourte",
        "I love you",
        "I'm proud of you"
    ])
    const [index, setIndex] = useState(0)
    const [opacity, setOpacity] = useState(1)

    function transition(){
        setOpacity(0);
        setTimeout(()=>{
            setIndex(prev=>prev === data.length-1? 0 : prev+1);
        },1000);
    }

    useEffect(()=>{
        const change = setTimeout(transition, 4000)
        return () => clearTimeout(change)
    })

    useEffect(()=>{
        setOpacity(1);
    },[index])

    return(
        <div className="quotes">
            <div className="quote" style={{opacity}}>{data[index]}</div>
        </div>
    )
}