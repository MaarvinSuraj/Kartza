import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Hey you!</h2>
          <p className={classes.firstMsg}>You look <span>HUNGRY...</span> aren't you?</p>
          <p className={classes.secondMsg}>
            wanna order something <span>DELICIOUS </span> from us?
          </p>
          {/* <p className={classes.desc}>
            Our restaurant always puts the client above.
            They are our single most important thing for our business.
          </p> */}
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order</button>
            <button className={classes.buttonSee}><a href="#foods"> Peek in<AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero