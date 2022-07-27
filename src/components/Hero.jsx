import React from 'react'
import images1 from '../images/hero-bg.jpg'

export default function Hero(){
    return(
        <div className='container hero'>
            <div className="polaroid" style={polaroidContainer}>
                <div className="img-container" style={imgPolaroid}>
                    <img src={images1} alt=""
                        style={{
                            width: "266px",
                            height: "459px",
                            position: "absolute",
                            top : "-72px"
                        }}
                    />
                </div>
            </div>
            <div className="greeting">
                <span className='font' style={{
                    fontSize: "64px"
                }}>Happy</span>
                <span className='font' style={{
                    fontSize: "96px",
                    marginTop: "-39px"
                }}>Birthday</span>
                <span className='font' style={{
                    fontSize: "24px",
                    marginTop: "-39px"
                }}>to my beloved person</span>
            </div>
        </div>
    )
}

const polaroidContainer={
    transformOrigin: "center -250px",
    width : "299px",
    height : "383px",
    backgroundColor : "white",
    display : "flex",
    justifyContent: "center",
    paddingTop: "16px",
    position :"relative"
};

const imgPolaroid ={
    width : '266px',
    height : '321px',
    left : '0',
    top : '3px',
    overflow: "hidden",
    position: "relative"
}