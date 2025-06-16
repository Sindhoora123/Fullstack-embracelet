import React from 'react'
import men_img from '../Assets/men.png'

const Menbanner = () => {
  return (
    <div className='women_banner' style={{background: "linear-gradient(45deg, #080808, #3e3e3e)", width:"auto",height:"60vh", marginBottom:"100px",padding:"0px 140px",display:"flex",justifyContent:"center",alignContent:"center"}}>
        <div className='banner-left' style={{flexDirection: "column",flex:"1" ,display: "flex",justifyContent: "center",gap: "20px",
             paddingLeft: "180px",lineHeight:"1.1"}}>
            <h1 style={{fontWeight: "600", fontSize: "50px",color: "aliceblue",}}>Handsomes!!</h1>
            <h1 style={{fontWeight: "600", fontSize: "50px",color: "aliceblue"}}>Bracelets here...</h1>
            <h2 style={{fontWeight: "600", fontSize: "50px",color: "#ff4141"}}>29% Offer for you</h2>

        </div>
        <div className='banner-right'style={{justifyContent:"center",display:"flex",alignContent:"center"}} >
            <img style={{height: "300px",width:" 300px",borderRadius: "10px",margin:"auto"}} src={men_img} alt=''></img>
        </div>
    </div>
  )
}

export default Menbanner;