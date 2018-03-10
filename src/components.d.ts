/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  MyComponent as ChartWrapper
} from './components/chart-wrapper/chart-wrapper.component';

declare global {
  interface HTMLChartWrapperElement extends ChartWrapper, HTMLStencilElement {
  }
  var HTMLChartWrapperElement: {
    prototype: HTMLChartWrapperElement;
    new (): HTMLChartWrapperElement;
  };
  interface HTMLElementTagNameMap {
    "chart-wrapper": HTMLChartWrapperElement;
  }
  interface ElementTagNameMap {
    "chart-wrapper": HTMLChartWrapperElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "chart-wrapper": JSXElements.ChartWrapperAttributes;
    }
  }
  namespace JSXElements {
    export interface ChartWrapperAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyComponent as HelloComponent
} from './components/my-component/my-component';

declare global {
  interface HTMLHelloComponentElement extends HelloComponent, HTMLStencilElement {
  }
  var HTMLHelloComponentElement: {
    prototype: HTMLHelloComponentElement;
    new (): HTMLHelloComponentElement;
  };
  interface HTMLElementTagNameMap {
    "hello-component": HTMLHelloComponentElement;
  }
  interface ElementTagNameMap {
    "hello-component": HTMLHelloComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hello-component": JSXElements.HelloComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface HelloComponentAttributes extends HTMLAttributes {
      firstName?: string;
      lastName?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
