import React, { useState , useEffect } from 'react';
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import pizzabg from '../../assets/pizzabg.webp'
import icebg from '../../assets/icebg.jpeg'
import burgerbg from '../../assets/burgerbg.jpeg'
import tandooribg from '../../assets/tandooribg.jpg'
import rollbg from '../../assets/rollbg.jpeg'
import pastabg from '../../assets/pastabg.jpeg'


const Hero = () => {

  const images = [
    pizzabg,
    icebg,
    burgerbg,
    tandooribg,   
    rollbg,
    pastabg
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showImage, setShowImage] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
      setShowImage(false);

      setTimeout(() => {
        setShowImage(true);
      }, 5000);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section style={{height: '100vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>HEY YOU!</h2>
          <p className={classes.firstMsg}>You look <span>HUNGRY...</span> aren't you?</p>
          <p className={classes.secondMsg}>
            wanna order something <span>DELICIOUS </span> from us?
          </p>
          {/* <p className={classes.desc}>
            Our restaurant always puts the client above.
            They are our single most important thing for our business.
          </p> */}
          <div className={classes.buttons}>
            {/* <button className={classes.buttonOrder}>Order</button> */}
            <button className={classes.buttonSee}><a href="#foods">Peek in<AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
        <div className={`image-container ${showImage ? 'show' : ''}`}>
          <img src={selectedImage} alt="" className={classes.pizzabgImg}/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero




