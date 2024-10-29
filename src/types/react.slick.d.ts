declare module 'react-slick' {
    import { Component } from 'react';
  
    interface SlickSettings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      // Add other settings as needed
    }
  
    export default class Slider extends Component<SlickSettings> {}
  }
  