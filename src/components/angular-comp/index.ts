import angular from 'angular';
import exampleComponent from './example.component';

angular.module('wrapped', [])
  .component('exampleComponent', exampleComponent);