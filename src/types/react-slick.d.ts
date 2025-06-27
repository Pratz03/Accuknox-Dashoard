declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      className?: string;
      dots?: boolean;
      arrows?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      pauseOnHover?: boolean;
      responsive?: {
        breakpoint: number;
        settings: Partial<Settings>;
      }[];
      [key: string]: any;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  