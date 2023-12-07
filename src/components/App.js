import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Services from './Services';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transition.css';

const App = () => {
  return (
    <Router>
        <Header />
        <div className='about'>
        <Routes>
          <Route
            path='/'
            element={
              <TransitionGroup>
                <CSSTransition
                  key='home'
                  timeout={500}
                  classNames='route'
                >
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/about'
            element={
              <TransitionGroup>
                <CSSTransition
                  key='about'
                  timeout={500}
                  classNames='route'
                >
                  <About />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/services'
            element={
              <TransitionGroup>
                <CSSTransition
                  key='services'
                  timeout={500}
                  classNames='route'
                >
                  <Services />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/social-media'
            element={
              <TransitionGroup>
                <CSSTransition
                  key='social-media'
                  timeout={500}
                  classNames='route'
                >
                  <SocialMedia />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/contact'
            element={
              <TransitionGroup>
                <CSSTransition
                  key='contact'
                  timeout={500}
                  classNames='route'
                >
                  <ContactForm />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

