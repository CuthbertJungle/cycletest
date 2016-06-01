import xs from 'xstream';
import {footer} from '@cycle/dom';

import FooterLinks from './FooterLinks';
import FooterSmallPrint from './FooterSmallPrint';

function Footer({DOM}) {

	let footerLinks = FooterLinks({DOM});
  let footerSmallPrint = FooterSmallPrint({DOM});

  let vtree$ = xs.combine(
    function (footerLinksVTree){
      return footer([
        footerLinksVtree,
        footerSmallPrintVtree
      ])
    },
    footerLinks.DOM.debug('footerLinksDOM')//, FooterSmallPrint.DOM.debug('footerSmallPrintDOM')
  )

	return {
  	DOM: vtree$ 
  };
}

export default Footer;