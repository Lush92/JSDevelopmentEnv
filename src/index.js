// numeral = a handy lib for working w/ no
import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');

// put this line wherever you want to step debug and check it in the Network tab
// debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
