import React from 'react'
import './404.css'
import Monster404 from '../../../image/Monster404.svg'


export const Page404 = () => {
  return (
    <>
      <div  className='backgroundContainer'></div>

      <div className='Page404' >
          <img src={Monster404} alt={Monster404} />
           <a className='buttonHero' href="/">return home</a>
      </div>

    </>
  )
}
