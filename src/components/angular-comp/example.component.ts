const template = `<h1>Hello, {{$ctrl.firstInput}} {{$ctrl.secondInput}}, from Angular!</h1>`;

export default {
  bindings: {
    firstInput: '@',
    secondInput: '@'
  },
  template
}