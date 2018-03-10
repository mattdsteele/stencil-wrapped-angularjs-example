import { Component, Element, Prop } from '@stencil/core';
import '../angular-comp';
import angular from 'angular';

@Component({
  tag: 'hello-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  @Element() private host: HTMLElement;
  @Prop({ mutable: true }) firstName: string;
  @Prop({ mutable: true }) lastName: string;


  componentDidLoad() {
    const shadowRoot = this.host;
    angular.bootstrap(shadowRoot, ['wrapped']);

  }
  render() {
    return (
      <div>
        <example-component first-input={this.firstName} second-input={this.lastName.toUpperCase()} />
      </div>
    );
  }
}
