import React from 'react'
import { useState,useEffect } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"

export default function Banner() {
    const [loopNum, setloopNum]=useState(0);
    const [isDeleting , setIsdeleting] = useState(false);
    const toRotate= ["Fullstack java developer", "MERN developer","Webdeveloper"];
    const [text, setText]=useState('');
    const [delta, setdelta]=useState(300-Math.random()*100);
    const period=2000; 

      useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return ()=>{ clearInterval(ticker)};
    },[text])

    const tick=() =>{
        let i=loopNum % toRotate.length;
        let fulltext=toRotate[i];
        let updateText=isDeleting? fulltext.substring(0, text.length-1) : fulltext.substring(0,text.length+1)

        setText(updateText);

        if(isDeleting){
            setdelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fulltext){
            setIsdeleting(true);
            setdelta(period);
        }else if(isDeleting && updateText === ''){
            setIsdeleting(false);
            setloopNum(loopNum+1);
            setdelta(500);
        }

        }
    
  return (
      <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>welcome to my portfolio</span>
                    <h1>{'hi I\'m sandesh SD '}<span className='wrap'>{text}</span></h1>
                    <p> lorem2</p>
                     <button onClick={()=> console.log('connect') }>lets connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt='header img' />
                </Col>
            </Row>
        </Container>
      </section>
  )
}
