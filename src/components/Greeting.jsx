import React from 'react'
import qouteIcon from '../images/greet-quote.png'
import deco1 from '../images/greet-deco1.png'
import deco2 from '../images/greet-deco2.png'
import deco3 from '../images/greet-deco3.png'

export default function Greeting(){
    return(
        <div className="container greet">
            <div className="wrapper">
                <span style={{
                    fontFamily: "'Delius', cursive",
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: 'white'
                }}>Helloo!!</span>
                <div className="wishes">
                    <img src={qouteIcon} alt="" />
                    <span className='text'>Halo ayanggggg, selamat kamu berada di website ekslusif milikmu wkwkw. Keren ga? Pasti keren lah ya😎, walaupun masih ada beberapa yang kurang hehehe. Aku harap kamu suka yaa </span>

                    <span className='text'>Selamat ulangtahun yang ke 19 ayang, mungkin kamu udah 2 kali baca ucapan dari aku🤣. Tapi aku tidak akan lelah untuk mendoakan yang terbaik buat kamu wkwkw. Semoga kamu sukses, sehat, bahagia dan selalu full senyum yaa. Kamu mau jadi maba kannn, semangat kuliahnya, harus totalitas, gaboleh setengah setengah. Ga boleh sering sering overthinking. JANGAN MAKAN ESKRIM BANYA BANYA, JANGAN TELAT MAKAN. Semangat ayanggg, perjalananmu masih jauh, kalo deket mah hubunganku ke kamu, anjayyyy</span>

                    <span className='text'>Semoga kamu suka kadonya yaa, memang ga seberapa si hehehe. Tapi semoga bisa bermanfaat buat kamuu. </span>
                    <br />
                </div>
            </div>
            <img src={deco1} alt="" id='deco1' />
            <img src={deco3} alt="" id='deco3' />
            <img src={deco2} alt="" id='deco2' />
        </div>
    )
}