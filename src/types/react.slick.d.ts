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
    }
  
    export default class Slider extends Component<SlickSettings> {}
  }
  