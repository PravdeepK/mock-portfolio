import React, { useRef } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ContactForm from './components/ContactForm'
import { TypeAnimation } from 'react-type-animation';
import github from './github.svg';
import linkedin from './linkedin.svg';
import calculator from './calculator.gif';
import lemon from './little-lemon.gif';
import tracker from './mouse-tracker.gif';
import portfolio from './portfolio.gif';

function App() {
  const midRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({
      top: midRef.current.offsetTop,
      behavior: 'smooth'
    });
  }
  const contactRef = useRef(null);

  const handleClick2 = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
  <div className="App">
    <header className='header'>
      <nav className="navbar">
        <a href="#" className="nav-link" onClick={handleClick}>Projects</a>
        <a href="#" className="nav-link" onClick={handleClick2}>Contact Me</a>
      </nav>
        
        <a href="https://github.com/PravdeepK" target="_blank" rel="noreferrer">
          <img src={github} className="logos" alt="logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/pravdeep-kullar/"target="_blank" rel="noreferrer">
          <img src={linkedin} className="logos" alt="logo"></img>
        </a>
    </header>
      
  <div className="App-header">
    <br></br>
    <TypeAnimation
      sequence={[
        "Hi I'm Pravdeep,",
        2000,
        "I'm a junior front-end developer.",
        2000,
        'Welcome to my website!',
        2000,
     ]}
        wrapper="div"
        speed={75}
        cursor={false}
        repeat={false}
        style={{ fontSize: '2em' }}
    />
  </div>
      
<div className="Mid" ref={midRef}>
  <div className='mid-border'>
    <h1 className="Mid-text">Here is a link to works I've done</h1>
  
  <div className='mid-content'>
    <div className='box'>
      <img src={calculator} className="gif"></img>
      <p className='git-description'>A standard calculator created via React.Js</p>
      <a className='Git-link' href="https://github.com/PravdeepK/Calculator">click here to see more</a>
    </div>
    <div className='box'>
      <img src={lemon} className="gif"></img>
      <p className='git-description'>A mock website I created for a fictional restaurant called Little Lemon. It was created with Html and CSS.</p>
      <a className='Git-link' href="https://github.com/PravdeepK/little-lemon-website">click here to see more</a>
    </div>
  </div>

  <div className='mid-content'>
    <div className='box'>
      <img src={tracker} className="gif"></img>
      <p className='git-description'>Using custom hooks, this application can track the coordinates of your mouse on the page.</p>
      <a className='Git-link' href="https://github.com/PravdeepK/mouse-tracker">click here to see more</a>
  </div>
    <div className='box'>
      <img src={portfolio} className="gif"></img>
      <p className='git-description'>Using React.Js I created a portfolio through a website.</p>
      <a className='Git-link' href="https://github.com/PravdeepK/portfolio">click here to see more</a>
    </div>
  </div>
</div>
</div>


<div className="Bottom" ref={contactRef}>
  <ContactForm />
</div>
        
</div>
      
  );
}

export default App;
