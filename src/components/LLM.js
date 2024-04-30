import React, { useState } from 'react';
import { Col, Collapse, Row } from "react-bootstrap";
import llms from '../images/LLMs.jpeg';
import gpt3img from '../images/gpt3img.png';
import llamaimg from '../images/llamaimg.png';
import lossplot from '../images/loss-plot.png';
import lossstats from '../images/loss-stats.png';
import mistralimg from '../images/mistralimg.webp';

// import Fade from "react-reveal";

import './LLM.css';
import './RAG.css';


const RAG = () => {

        const [showDropdown, setShowDropdown] = useState(false);
      
        const toggleDropdown = () => {
          setShowDropdown(!showDropdown);
        };

        const [expandedItems, setExpandedItems] = useState([]);

        const toggleExpand = (index) => {
            if (expandedItems.includes(index)) {
                setExpandedItems(expandedItems.filter((item) => item !== index));
            } else {
                setExpandedItems([...expandedItems, index]);
            }
        };

    return (
        <div>

   {/* <Fade> */}
    <div className='rag-container'>
      <h1 className='topic slide-up'>LLMs</h1>      
    </div>
    {/* </Fade> */}
    <div className='exp-container'>
      <h2>What are LLMs?</h2>
      <p>
        LLMs, or Large Language Models, are a class of artificial intelligence (AI) models that have revolutionized natural language processing (NLP) tasks. These models are designed to understand and generate human-like text based on vast amounts of training data.
      </p>
      <p>
        At their core, LLMs are deep learning models that use a neural network architecture to process and generate text. They are trained on large datasets containing billions of words from diverse sources such as books, articles, websites, and more. The training process involves exposing the model to this vast amount of text data and teaching it to understand the nuances of language, including grammar, semantics, and context.
      </p>
      <p>
        One of the key features of LLMs is their ability to generate coherent and contextually relevant text. By leveraging the patterns and structures present in the training data, LLMs can generate text that mimics human writing to a remarkable degree. This capability has led to various applications across multiple domains, including language translation, text summarization, question answering, and more.
      </p>
      <br></br>
      <div className="dropdown-container">
        <button className="dropdown-exp-toggle" onClick={toggleDropdown}>
          {showDropdown ? 'Hide Details' : 'Read More'}
        </button>
        {showDropdown && (
            
          <div className="dropdown-exp-content">
            
            <Row className="align-items-center content huggingfaceintro">
            <Col md={6} className="order-md-2">
            {/* <Fade right> */}
              <img className="img-fluid w-100" src={llms} alt="" />
              {/* </Fade> */}
            </Col>
            <Col md={6} className="text-center order-md-1">
                <div className="row justify-content-center first-content">
                    <div className="col-10 col-lg-8 blob mb-5 mb-md-0 parts">
                        <br></br>
                    <h3>Here's how LLMs contribute to creating a chatbot:</h3>
            <ul>
                {/* <Fade top> */}
              <li>1. Understanding Natural Language</li>
              {/* </Fade> */}
              {/* <Fade top duration={5000}> */}
              <li>2. Generating Responses</li>
              {/* </Fade> */}
              {/* <Fade top={2000}> */}
              <li>3. Personalization and Context</li>
              {/* </Fade> */}
              {/* <Fade top={2800}> */}
              <li>4. Handling Complex Queries</li>
              {/* </Fade> */}
              {/* <Fade top={3600}> */}
              <li>5. Continuous Learning</li>
              {/* </Fade> */}
              <br></br>
            </ul>
                    </div>
                </div>
            </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
    
    {/* Cards section */}
    <div className='about-container'>
        {/* <Fade bottom> */}
        <h3 className='cards-h3'>LLM models chosen for evaluation</h3>
        {/* </Fade> */}
        <br></br>
        {/* <Fade bottom duration={1200}> */}
  <div className="about-content">
    <div className="about-card about-left animate">
      <div className="about-text">
        <h2>LLAMA</h2>
        <p>

        The LLAMA (Large Language Model Meta AI) model, developed by Meta AI, represents a breakthrough in natural language processing (NLP) technology. It belongs to the family of autoregressive large language models (LLMs), which are designed to understand and generate human-like text based on extensive training data. LLAMA leverages advanced techniques in machine learning and deep neural networks to comprehend the nuances of language, enabling it to provide sophisticated responses to queries and tasks. Its release in February 2023 marked a significant advancement in the field of NLP, opening up new possibilities for AI-driven applications and solutions.            </p>
        <img src={llamaimg} alt="LLAMA Image" />
      </div>
    </div>
    <div className="about-card about-middle animate">
      <div className="about-text">
        <h2>GPT-3</h2>
        <p>
        GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing model developed by OpenAI. It represents the latest iteration in the GPT series of models, known for their exceptional ability to generate coherent and contextually relevant text. GPT-3 leverages a transformer architecture and is pre-trained on vast amounts of text data, allowing it to understand and produce human-like text across a wide range of tasks and domains. Its development by OpenAI has propelled the field of natural language processing forward, enabling breakthroughs in areas such as conversational AI, content generation, and language understanding.</p>
        <img src={gpt3img} alt="GPT-3 Image" />
      </div>
    </div>
    <div className="about-card about-right animate">
      <div className="about-text">
        <h2>Mistral</h2>
        <p>
        Mistral AI, a French company founded in April 2023 by former Meta Platforms and Google DeepMind employees, has quickly made its mark in the AI industry. With a €385 million funding round in October 2023 and a valuation exceeding $2 billion by December of the same year, Mistral AI focuses on developing and selling open-source AI products. They advocate for open-source models, releasing two models as open-source weights and offering three more via API access. This approach reflects their commitment to democratizing AI and fostering collaboration in the field.</p>
        <img src={mistralimg} alt="Mistral Image" />
      </div>
    </div>
  </div>
  {/* </Fade> */}
</div>

<hr></hr>
{/* Loss from console output */}
<h2 className='llm-results'>LLAMA Results</h2>
<Row className="align-items-center content">
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />

        {/* <Fade left> */}
        <img className="img-fluid" style={{ width: '70%' }} src={lossplot} alt="prompt Analysis" />
        {/* </Fade> */}
        <br />
    </Col>
    <Col sm={12} md={6} className="text-center mx-auto">
        <br />
        {/* word cloud */}
        {/* <h2 className='promptanalysis-paragh'>Message Frequency</h2> */}
        {/* <p className='promptanalysis-paragh'>This is a word cloud..cbjebckebkebkvbvbueecbbiurhfkjbckc</p> */}
        {/* <Fade right> */}
        <img className="img-fluid" style={{ width: '70%' }} src={lossstats} alt="prompt Analysis" />
        {/* </Fade> */}
        <br />
    </Col>
</Row>
<br></br>
<br></br>
{/* Example results */}


        <div className="row">
    <div className="col-md-6">
        {/* <Fade left> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(0)}>
                            <strong className="card-title">Can I feed my dog grapes?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(0) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(0)}>
                            <div className="card-body">
                                <p>
                                As a helpful AI advisor for pet owners, I must inform you that it is not recommended to feed your dog grapes. Grapes and raisins have been known to cause kidney failure in dogs, and the exact mechanism of how they cause this is not fully understood. In fact, the American Kennel Club and other veterinary organizations have listed grapes and raisins as toxic to dogs.</p>

                                <p>While some dogs may be able to tolerate small amounts of grapes without any issues, it's important to exercise caution and avoid feeding them to your furry friend altogether. It's always best to consult with a veterinarian before introducing new foods into your dog's diet, especially if they are considered toxic.</p>

                                <p>Instead of grapes, there are plenty of other safe and healthy treats that you can give to your dog. Some examples include:</p>

                                <p>* Sweet potato slices</p>
                                <p>* Carrots</p>
                                <p>* Green beans</p>
                                <p>* Apple slices (without the seeds)</p>
                                <p>* Peanut butter</p>

                                <p>Remember, it's always better to be safe than sorry when it comes to your dog's health. If you have any concerns or questions, don't hesitate to consult with a veterinarian.
                                  </p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>

    <div className="col-md-6">
        {/* <Fade left duration={1200}> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(1)}>
                            <strong className="card-title">Are chapatis good for dogs and cats?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(2) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(1)}>
                            <div className="card-body">
                            Chapatis are not suitable for dogs and cats as they are not a nutritionally balanced food source for pets. Chapatis are a type of flatbread made from wheat flour, water, and salt, and they do not provide the necessary nutrients, vitamins, and minerals that pets need to stay healthy. Feeding chapatis to dogs and cats can lead to malnutrition, digestive problems, and other health issues. It's best to stick to a high-quality, nutrient-rich pet food that is specifically formulated for your pet's species and life stage.
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>
</div>
<br></br>
<br></br>
<div className="row">
    <div className="col-md-6">
        {/* <Fade left> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(2)}>
                            <strong className="card-title">What medication should I give if my dog has pneumonia?Where did you get this imformation from?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(0) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(2)}>
                            <div className="card-body">
                            <p>As a helpful AI Advisory for pet owners, I'm here to provide you with accurate and reliable information to help you make informed decisions about your furry friends' health. Here are some answers to your questions:</p>

<p>1. Medication for dog pneumonia:</p>

<p>If your dog has pneumonia, it's essential to consult with a veterinarian as soon as possible. The veterinarian will diagnose the condition and recommend the appropriate medication based on the severity of the disease. Antibiotics are usually prescribed to treat pneumonia in dogs, and they may be given orally or intravenously, depending on the severity of the infection.</p>

<p>Sources:</p>

<p>* American Animal Hospital Association (AAHA) guidelines for the treatment of pneumonia in dogs</p>
<p>* The Merck Veterinary Manual, a comprehensive guide for veterinarians and pet owners on canine pneumonia</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>

    <div className="col-md-6">
        {/* <Fade left duration={1200}> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(3)}>
                            <strong className="card-title">Can I give my dog Starbucks Pup Cup?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(1) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(3)}>
                            <div className="card-body">
                            No, it's not recommended to give your dog Starbucks Pup Cup or any other human food item that is not specifically formulated for pets. Many human foods, including coffee drinks, can be toxic to dogs and can cause a range of health problems, including vomiting, diarrhea, and pancreatitis. It's best to stick to a high-quality, nutrient-rich pet food that is specifically formulated for your dog's species and life stage.

                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>
</div>
<br></br>
<div className="row">
    <div className="col-md-6">
        {/* <Fade left> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(4)}>
                            <strong className="card-title">Which books where you trained on? Can you name them with their authors?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(0) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(4)}>
                            <div className="card-body">
                              <p>Ah, a fellow pet enthusiast! I'm glad to hear that you're interested in learning more about pets. As a helpful AI advisor, I've been trained on a large number of question answering datasets, including some fantastic books about pets! Here are some of the books that I've been trained on, along with their authors:</p>
                            <p>1. "<em>The Secret Life of Pets</em>" by Brian McClellan - This book explores the fascinating world of pets and their unique personalities, habits, and behaviors.</p>
<p>2. "<em>Pets: The Complete Guide</em>" by Dr. K. C. Frantz - This comprehensive guide covers everything you need to know about pets, from choosing the right breed for your lifestyle to understanding their behavior and health.</p>
<p>3. "<em>The Dog Whisperer: A Guide to Understanding Your Dog's Behavior</em>" by Cesar Millan - This book offers insights into canine behavior and provides practical tips for communicating with and training your furry friend.</p>
<p>4. "<em>The Cat Whisperer: Why Do Cats Do That?</em>" by Lynn E. Ponton - This book delves into the mysterious world of cat behavior and provides helpful advice for understanding and caring for your feline companion.</p>
<p>5. "<em>The Horse: The Epic History of Their Domestication, and the Ancient Art of Riding</em>" by Elizabeth A. Williams - This book provides a fascinating look at the history of horses and the art of riding, perfect for animal lovers of all ages.</p>
<p>6. "<em>The Parrot Behavior Book: Understanding and Caring for Your Feathered Friend</em>" by Dr. Harry F. H. Weisler - This book offers a wealth of knowledge on parrot behavior and provides practical tips for creating a happy and healthy environment for your feathered friend.</p>
<p>7. "<em>The Rabbit Handbook: A Complete Guide to Care, Health, and Behavior</em>" by Dr. K. C. Frantz - This comprehensive guide covers everything you need to know about caring for your rabbit, from choosing the right breed to understanding their behavior and health.</p>
<p>8. "<em>The Guinea Pig Handbook: A Complete Guide to Care, Health, and Behavior</em>" by Dr. K. C. Frantz - This comprehensive guide covers everything you need to know about caring for your guinea pig, from choosing the right breed to understanding their behavior and health.</p>

                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>

    <div className="col-md-6">
        {/* <Fade left duration={1200}> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(5)}>
                            <strong className="card-title">Should I bathe my lab everyday? Will he catch flu if I bathe him everyday?</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(1) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(5)}>
                            <div className="card-body">
                            <p>As a helpful AI Advisory for pet owners, I'm happy to help you with your question! Bathing your Lab every day is not necessary and can actually be harmful to their health. Here's why:</p>
<ol>
    <li>
        <p>Over-bathing can strip your Lab's coat of its natural oils, leading to dryness and irritation. Labs have a double coat, and the undercoat can become dry and itchy if bathed too frequently.</p>
    </li>
    <li>
        <p>Bathing your Lab every day can expose them to excessive amounts of chlorine or other harsh chemicals found in some shampoos, which can be harmful to their skin and coat.</p>
    </li>
    <li>
        <p>Frequent bathing can also disrupt your Lab's natural skin pH, which can lead to skin irritation and infections.</p>
    </li>
</ol>
<p>Instead of bathing your Lab every day, it's recommended to bathe them once or twice a week, depending on their activity level and the amount of dirt and debris they accumulate. You can also use a gentle, pH-balanced shampoo specifically formulated for Labs to keep their coat and skin healthy.</p>
<p>Regarding the risk of your Lab catching the flu, it's unlikely that they will catch the human flu virus. Labs are not susceptible to the same viruses that affect humans, and they don't have the same respiratory system as humans. However, it's important to keep your Lab away from other animals and people who are sick to minimize the risk of transmission.</p>
<p>In summary, bathing your Lab every day is not necessary and can be harmful to their health. Instead, bathe them once or twice a week with a gentle, pH-balanced shampoo, and keep them away from other animals and people who are sick to minimize the risk of transmission. If you have any concerns about your Lab's health, consult with your veterinarian for personalized advice.</p>

                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        {/* </Fade> */}
    </div>
</div>

       <br></br> 
       <br></br>    
        </div>
    );
};

export default RAG;
