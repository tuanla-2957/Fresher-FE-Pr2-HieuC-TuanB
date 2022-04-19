import React from "react";
import "./AboutUs.scss";
import AboutUsImage from "../../assets/img/about-us.jpg";
import Ambition from "../../assets/img/ambition.jpg";
import Accordion from "../../components/UI/Accordion/Accordion";
import AnimateCounter from "../../components/UI/AnimateCounter/AnimateCounter";
import LazyLoad from "react-lazyload";
import CarouselNoIndicate from "../../components/UI/CarouselNoIndicate/CarouselNoIndicate";
import History from "../../assets/img/history.jpg";
import { history, coperate, items, ambitions } from "../../data.cons";

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='about-us__banner'>
        <img src={AboutUsImage} alt='about-us' />
      </div>
      <div className='container'>
        <div className='about-us__ambition'>
          <div className='overlay-image'>
            <div class='overlay'>
              <h4>
                Check This <span>Out!</span>
              </h4>
            </div>
            <img src={Ambition} alt='ambition' />
          </div>
          <div className='about-us__ambition-content'>
            <h3>TRYING TO CREATE A NEW TRAVELING EXPERIENCE SINCE 2010</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              dolorum blanditiis ullam nostrum laboriosam vitae similique
              obcaecati facilis nesciunt est nemo a, eum culpa voluptatibus?
              Deserunt tempore saepe quisquam adipisci! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro dolorum blanditiis ullam
              nostrum laboriosam vitae similique obcaecati facilis nesciunt est
              nemo a, eum culpa voluptatibus? Deserunt tempore saepe quisquam
              adipisci! amet consectetur adipisicing elit. Porro dolorum
              blanditiis ullam nostrum laboriosam vitae similique obcaecati
              facilis nesciunt est nemo a, eum culpa voluptatibus? Deserunt
              tempore saepe quisquam adipisci!
            </p>
            <ul className='about-us__ambition-list'>
              {ambitions.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              dolorum blanditiis ullam nostrum laboriosam vitae similique
              obcaecati facilis nesciunt est nemo a, eum culpa voluptatibus?
              Deserunt tempore saepe quisquam adipisci! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro dolorum blanditiis ullam
              nostrum laboriosam vitae similique obcaecati facilis nesciunt est
              nemo a, eum culpa voluptatibus? Deserunt tempore saepe quisquam
              adipisci!
            </p>
          </div>
        </div>
        <div className='about-us__slogan'>
          <h4>
            LOREM IPSUM PROIN GRAVIDA NIBH VEL VELIT AUCTOR ALIQUET AENEAN LOREM
            QUIS BIBENDUM AUCTOR, NISI ELIT CONSEQUAT IPSUM, NEC SAGITTIS SEM
            NIBH ID ELIT
          </h4>
        </div>
        <div className='about-us__history'>
          <div>
            <h3>HISTY OF YOUR PAGE</h3>
            <Accordion data={history} />
          </div>
          <div className='overlay-image'>
            <div className='overlay'>
              <h4>
                Check This <span>Out!</span>
              </h4>
            </div>
            <img src={History} alt='abmition'></img>
          </div>
        </div>
      </div>
      <LazyLoad>
        <div className='about-us__coperate'>
          {coperate.map((cop) => (
            <div className='about-us__coperate-item'>
              <AnimateCounter countTo={cop.countTo} />
              <h6>{cop.title}</h6>
            </div>
          ))}
        </div>
      </LazyLoad>
      <div className='about-us__branding'>
        <h3>BRANDING WE COPERATE</h3>
        <CarouselNoIndicate items={items} />
      </div>
    </section>
  );
};

export default AboutUs;
