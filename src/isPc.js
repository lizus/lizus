import isMobile from './isMobile';
import {not} from 'ramda';

const isPc=not(isMobile);

export default isPc;
