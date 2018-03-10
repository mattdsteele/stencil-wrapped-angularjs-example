import 'chart.js';
import 'angular-chart.js';
import angular from 'angular';

const template = `
<canvas id="bar" class="chart chart-bar"
  chart-data="$ctrl.data" chart-labels="$ctrl.labels"> chart-series="$ctrl.series"
</canvas`
class controller {
  labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  series = ['Series A', 'Series B'];
  data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}
const ChartWrapper = {
  template, controller
}
angular.module('chartWrapper', ['chart.js'])
  .component('ngChartWrapper', ChartWrapper)