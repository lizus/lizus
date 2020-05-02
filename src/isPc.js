import isMobile from './isMobile';
import {not} from 'ramda';

var isPc=not(isMobile);

export default isPc;
