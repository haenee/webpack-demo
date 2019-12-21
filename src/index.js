var _ = require('lodash');
import './style.css';
import './hello.scss';
import {area, circumference} from './js/circle';
import han from './js/cube';

const component=() =>{
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  console.log('console test');

  return element;
}
// const result = area(5);
// const result2 = circumference(5);
const result3 = han.volume(5);
console.log(result3);


document.body.appendChild(component());