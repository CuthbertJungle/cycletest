import xs from 'xstream';
import {h2} from '@cycle/dom';

function FooterSmallPrint({DOM}) {

  let vtree$ = xs.of(
    h2(["footer small print !"])
  );
  
  return {
    DOM: vtree$
  };
};

export default FooterSmallPrint;