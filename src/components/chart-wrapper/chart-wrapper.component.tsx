import { Component, Element } from '@stencil/core';
import './ng-chart-wrapper.component';
import angular from 'angular';

@Component({
  tag: 'chart-wrapper',
  styleUrl: 'chart-wrapper.component.css',
  shadow: false
})
export class MyComponent {
  @Element() private host: HTMLElement;


  componentDidLoad() {
    angular.bootstrap(this.host, ['chartWrapper']);
  }
  render() {
    return (
      <div>
        <ng-chart-wrapper />
      </div>
    );
  }
}
