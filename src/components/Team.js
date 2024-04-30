// import { FullPageChat } from "flowise-embed-react";
import { React } from 'react';
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';
import sharanya from '../images/sharanya.png';
import shra from '../images/shra_pic.png';
import simran from '../images/simran.jpeg';

import './Home.css';
import './Team.css';




const Team = () => {


    
  return (
    <div>
        <Fade>
    <div className='team-container'>
      {/* <h1>TEAM WORK MAKES THE DREAM WORK.</h1> */}
     
    </div>
    </Fade>
    <div>
      <h2 className='team-header'>Meet the Team</h2>
    </div>

   
<Row className="align-items-center content teamintro my-4">
<Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Shravani Hariprasad</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={shra} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='https://www.linkedin.com/in/shravani-hariprasad-507280177/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='https://github.com/shravani-01'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Sharanya Akkone</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={sharanya} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='https://www.linkedin.com/in/sharanya-akkone-b3b15b103/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='https://github.com/sharanya218'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Simran Solanki</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={simran} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='https://www.linkedin.com/in/simran-solanki-89b4b2223/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='https://github.com/simran98solanki'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>
</Row>



    </div>
  );
}

export default Team;
