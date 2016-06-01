import xs from 'xstream';
import {footer, div, h2, a, img, nav, small, b} from '@cycle/dom';

function FooterLinks({DOM}) {

  let vtree$ = xs.of(
    h2(["footer links !"])
  );

  return {
    DOM: vtree$
  };
};

export default FooterLinks;