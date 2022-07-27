
import deco1 from '../images/picture-deco1.png'
import deco2 from '../images/picture-deco2.png'
import deco3 from '../images/picture-deco3.png'
import deco4 from '../images/picture-deco4.png'

import pict1 from '../images/picture-2.jpg'
import pict2 from '../images/picture-4.jpg'
import pict3 from '../images/picture-3.jpg'

import Card from './Pic-Card'

export default function Picture(){
    
    const text = [
        `Ini salah satu gambar pertama yang bikin aku akhirnya "mengagumi" kamu wkwkw selain foto yang ada di awall`,
        "Kalo foto yang ini sih gila cantik banget, serius ga bohong. Aku kalo liat ini bisa senyum senyum sendiri😭",
        "Kalo yang ini salah satu eksplisit konten kamu yang paling cantik, mungkin itu dapet nilai 1000000/10, sangat kalem dan anggun👍🏻😭"
    ]

    return(
        <div className="picture">
            <img src={deco1} alt="" id='pdeco1' className='pdeco'/>
            <img src={deco3} alt="" id='pdeco3' className='pdeco'/>
            <img src={deco2} alt="" id='pdeco2' className='pdeco'/>
            <img src={deco4} alt="" id='pdeco4' className='pdeco'/>             
            <div className="wrap">
                <span style={{
                    fontFamily: "'Delius', cursive",
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: 'white',
                    textAlign:"center",
                    margin:"40px 0"
                }}>This picture shows how wonderfull you are</span>
            </div>
            <div className="wadah">
                <Card pict={pict1} text={text[0]}/>
                <Card pict={pict2} text={text[1]}/>
                <Card pict={pict3} text={text[2]}/>
            </div>

            <span style={{
                    fontFamily: "'Delius', cursive",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: 'white',
                    textAlign:"center",
                    margin:"20px 0 0",
                    display: "block"
                }}>And much more...</span>
            <span style={{
                    fontFamily: "'Delius', cursive",
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: 'white',
                    textAlign:"center",
                    margin:"10px 0 0",
                    display: "block"
                }}>*anything about you is wonderfull for me xD</span>


        </div>
    )
}