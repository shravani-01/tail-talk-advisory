// import { FullPageChat } from "flowise-embed-react";
import { React } from 'react';
// import '../App.css';
import { Col, Row } from "react-bootstrap";

import swot from '../images/swot.jpg';
import './Analysis.css';
import './Home.css';

import { Fade } from 'react-awesome-reveal';
import graph from '../images/graph.png';
import freq from '../images/messagefreq.png';
import senti from '../images/sentianalysis.png';
import wordcloud from '../images/wordcloud.png';


const Analysis = () => {


    
  return (
    <div>
      <Fade >
    <div className='analysis-container'>
      {/* <Slide direction='down'> */}
      <h1 className='analysis-header slide-down'>Analysis</h1>
      {/* </Slide> */}
    </div>
    </Fade>
   
   <div>
      <h2 className='swotanalysis-header'>SWOT ANALYSIS</h2>
      <div className='swot'>
                {/* Workflow Flowchart */}
                <Row className="align-items-center content">
                    <Col className="text-center mx-auto">
                        <br></br>
                        <img className="img-fluid" style={{ width: '70%' }} src={swot} alt="Swot Analysis" />
                        <br></br>
                    </Col>
                </Row>
            </div>
            <br></br>
            <br></br>
    </div>

    <hr></hr>
    <Fade>
    <div className='prompt-analysis'>
      <br></br>
      <h2 className='promptanalysis-header'>ChatBot Prompt Analysis</h2>
      <div className='prompt'>
                {/* Workflow Flowchart */}
                {/* <Fade bottom> */}
                <Row className="align-items-center content">
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />
        {/* word cloud */}
        {/* <h2 className='promptanalysis-paragh'>Word Cloud</h2> */}
        <img className="img-fluid" style={{ width: '90%' }} src={wordcloud} alt="prompt Analysis" />
        <br />
    </Col>
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />
        {/* word cloud */}
        {/* <h2 className='promptanalysis-paragh'>Message Frequency</h2> */}
        {/* <p className='promptanalysis-paragh'>This is a word cloud..cbjebckebkebkvbvbueecbbiurhfkjbckc</p> */}
        <img className="img-fluid" style={{ width: '100%' }} src={freq} alt="prompt Analysis" />
        <br />
    </Col>
</Row>

                <br></br>
                <Row className="align-items-center content">
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />
        {/* word cloud */}
        {/* <h2 className='promptanalysis-paragh'>Word Cloud</h2> */}
        <img className="img-fluid" style={{ width: '90%' }} src={senti} alt="prompt Analysis" />
        <br />
    </Col>
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />
        {/* word cloud */}
        {/* <h2 className='promptanalysis-paragh'>Message Frequency</h2> */}
        {/* <p className='promptanalysis-paragh'>This is a word cloud..cbjebckebkebkvbvbueecbbiurhfkjbckc</p> */}
        <img className="img-fluid" style={{ width: '100%' }} src={graph} alt="prompt Analysis" />
        <br />
    </Col>
</Row>
                
                {/* </Fade> */}
            </div>
            <br></br>
            <br></br>
    </div>
    </Fade>





    </div>
  );
}

export default Analysis;
