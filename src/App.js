import React, { Component } from 'react';
import './App.css';
import rawSlides from './slide-data';
import getSlide from './components/slides';

const types = [
  'welcome',
  'schedule',
];
const slideDuration = 2000;
const slides = rawSlides.filter(slide => types.includes(slide.type));

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerId: null,
      activeSlide: slides.length ? 0 : null,
      slides,
    };
  }
  componentDidMount() {
    const advanceSlide = () => {
      const { activeSlide, slides } = this.state;
      if(activeSlide !== null) {
        this.setState({
          activeSlide: (activeSlide + 1) % slides.length
        });
      }
    };

    this.setState({
      timerId: setInterval(advanceSlide, slideDuration),
    });
  }

  render() {
    const { slides, activeSlide } = this.state;
    const Slide = getSlide(slides[activeSlide].type);
    return (
      <div className="App">
        <Slide { ...slides[activeSlide] }/>
        <p className="footer">{ activeSlide + 1 } / { slides.length }</p>
      </div>
    );
  }
}

export default App;
