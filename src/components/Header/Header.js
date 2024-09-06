import React from 'react'
import './Header.css'
import CountUp from "react-countup"
import {HiLocationMarker} from 'react-icons/hi'

function Header() {
  return (
    <div className='header'>
    <section className='hero-wrapper'>
     <div className='paddings innerWidth flexCenter hero-container'>
  
    {/*left side*/}
    <div className='flexColStart hero-left'>
        <div className='hero-title'>
         <div className="orange-circle"/>
            <h1>
                  Discover <br/> Prime Beauty <br/> Solutions
            </h1>
        </div>
      
   
    <div className='flexColStart hero-des'>
        <span className='secondaryText'><br/>Find a variety of beauty prooducts that suit your unique style
</span>
<span className='secondaryText'>Uncover prime solutions crafted just for you</span>

    </div>
    <div className="flexCenter search-bar">
           <HiLocationMarker color="var(--olive)" size={25}/> 
           <input type="text"/>
           <button className="button">Search</button>
        </div>

        <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span  className='secondaryText'>
                  <CountUp start={8000} end={9000} duration={4}/>  
                  <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
                <span  className='secondaryText'>
                  <CountUp start={1950} end={2000} duration={4}/>  
                  <span>+</span>
                </span>
                <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
                <span  className='secondaryText'>
                  <CountUp  end={5} />  
                  <span>+</span>
                </span>
                <span className='secondaryText'>Ratings </span>
            </div>


        </div>

        </div>

         {/* right side*/}
    <div className='flexCenter hero-right'>
       
        <div className="image-container">
            <img src='./g7.jpeg' alt=''/>
        </div>
        </div>
    </div>

    </section>



    </div>
  )
}

export default Header
