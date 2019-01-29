import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from '../components/Section';
import Section0 from '../components/section0/Section0';
import './styles/css/main.css';

const fullpageOptions = {
  licenseKey: '6A73F4EE-524245AF-8CFE9E57-0D099183',
  //Navigation
  lockAnchors: false,
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: [
    'Welcome',
    'Who We Are',
    'How We Do It',
    'Why We Excel',
    'Get In Touch'
  ],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 900,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 600,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  verticalCentered: false,
  responsiveWidth: 1020,

  lazyLoading: true
};

const FullpageWrapper = props => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Section0 />
          <Section title='Section Two' />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullpageWrapper;
