// import { FullPageChat } from "flowise-embed-react";
import { Slide } from 'react-awesome-reveal';

import '../App.css';
import img2 from '../images/CatNutrition.jpg';
import img1 from '../images/young-female-entrepreneur-works-from-home-office-sitting-her-laptop-with-her-dog-by-her-side-created-with-generative-ai-technology_132358-12174.jpg.avif';
import './Home.css';





const Home = () => {


    
  return (
    <div>
    <div className='hero-container'>
      {/* <image src={pet} alt="pet" /> */}
      <Slide direction='up' >

      <h1 className='hero-header'>TAIL TALK ADVISORY</h1>
      </Slide>
      <Slide direction='up' duration='1200'>
      <p className='hero-paragh'><i>Welcome to your pet solution stop: Where solutions are just a chat away!</i></p>
      <p className='hero-paragh'><i>Fluent in furry, ready to assist!</i></p>
      </Slide>
      <br></br>
      <Slide direction='up' duration='2000'>

      <ul className="social">
                <li className="button btn project-btn">
                  <a href="/tail-talk-advisory/#/AI">
                    <b>Chat Now</b> &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
              </Slide>

     
    </div>
  
   
      
     {/* Motivation section */}
     <div className='motivation-container'>
        <h2><b>Motivation for Our Project</b></h2>
        <p>
        Our motivation for creating this chatbot for pet parents and young veterinary professionals stems from our own experiences as pet owners. We understand the desire to seek quick answers to small behavioral queries without necessarily wanting to incur the expense of consulting a professional for every little concern. As pet lovers ourselves, we often find ourselves turning to Google for guidance, but we recognize the limitations and uncertainties associated with online information. Therefore, we aim to provide a convenient and accessible platform where individuals can seek advice and information regarding their pets' behavior and well-being.           </p>
        <p>
        However, it's important to note that while our chatbot can offer insights and suggestions based on common knowledge and experiences, we do not claim to be medical professionals. We strongly advise pet owners to seek a second opinion from a qualified veterinary professional for any concerns regarding their pets' health or behavior. Our ultimate goal is to empower pet parents and young veterinary professionals with reliable resources while prioritizing the well-being and safety of our beloved animal companions.          </p>
    
      </div>

       {/* Video Section */}
       <div className='video'>
      <iframe  width="860" height="515" src="https://www.youtube.com/embed/4ahwiHoFMl0?si=Ohy__2jcJYP91uiK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>


    {/* About section */}
    <div className='about-container'>
  <div className="about-content">

    <div className="about-card about-left animate ">
      <div className="about-text">
        <h2>What We Do?</h2>
        <p>We provide innovative pet care solutions powered by AI technology, helping pet owners ensure the well-being of their furry friends.</p>
        <img src={img1} alt="Left Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      </div>
    </div>
  
    <div className="about-card about-right animate ">
      <div className="about-text">
        <h2>How We Do It?</h2>
        <p>Our AI ChatBot analyzes pet data and behavior patterns to offer personalized recommendations for nutrition, exercise, health care, and more.</p>
        <img src={img2} alt="Right Image" className="about-image" />
      </div>
    </div>

  </div>
</div>

    </div>
  );
}

export default Home;
