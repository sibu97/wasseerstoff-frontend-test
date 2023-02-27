import React from 'react'
import Bargrapg from './bargraph/Bargrapg'
import Earnings from './earinng/Earnings'
import HomeData from './home_data/HomeData'
import './overview.css'
import worldmap from './images/Hexmap.png'


const Overview = () => {
    return (
      <div className='ov'>
         <HomeData/>
        <div style={{display:'flex'}}>
         <Earnings/>
          <img src={worldmap} alt='map' />
        </div>
        <Bargrapg/>
           
           
    </div>
  )
}

export default Overview