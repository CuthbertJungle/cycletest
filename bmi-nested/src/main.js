import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import Footer from './Footer';
import BmiCalculator from './BmiCalculator';

//const main = BmiCalculator;
const main = Footer;

run(main, {
  DOM: makeDOMDriver('#main-container')
});
