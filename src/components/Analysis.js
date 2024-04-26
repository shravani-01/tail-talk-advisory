// import { FullPageChat } from "flowise-embed-react";
import { React } from 'react';
// import '../App.css';
import { Col, Row } from "react-bootstrap";

import swot from '../images/swot.jpg';
import './Analysis.css';
import './Home.css';

import { Fade } from 'react-awesome-reveal';



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

   





    </div>
  );
}

export default Analysis;
